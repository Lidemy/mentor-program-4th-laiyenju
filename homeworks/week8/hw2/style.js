/* eslint-disable no-alert, no-restricted-syntax */
const clientId = 'i1syzqdx624i0h2q2xc6if1tyi0em5';
const accept = 'application/vnd.twitchtv.v5+json';
const errorMessage = '請再試一次';
// 取用 Twitch Top5 API
const requestTop5 = new XMLHttpRequest();

const getTop5 = (callback) => {
  const twitchTopAPI = 'https://api.twitch.tv/kraken/games/top?limit=5';
  requestTop5.open('GET', twitchTopAPI, true);
  requestTop5.setRequestHeader('Client-ID', clientId);
  requestTop5.setRequestHeader('Accept', accept);
  // Event 開始
  requestTop5.onload = () => {
    if (requestTop5.status >= 200 && requestTop5.status < 400) {
      // 處理各種可能的錯誤情況
      let games;
      // 如果抓取 JSON 出錯
      try {
        games = JSON.parse(requestTop5.response);
      } catch (err) {
        callback(errorMessage);
        return;
      }
      // 如果沒有 prize 的值
      if (!games.top) {
        callback(errorMessage);
        return;
      }
      // 確定沒出錯後，回傳 callBack 參數如下
      callback(null, games.top);
    }
  };
  requestTop5.onerror = () => {
    callback(errorMessage);
  };
  requestTop5.send();
};

// 取用 Twitch Stream API
// 有兩種不同情況：一是首頁的全體 top20 直播，一個是個別遊戲的 top20 直播，需用 event delegation 監聽
const requestStream = new XMLHttpRequest();
let twitchStreamAPI = 'https://api.twitch.tv/kraken/streams?limit=20';
const getStream = (callback) => {
  requestStream.open('GET', twitchStreamAPI, true);
  requestStream.setRequestHeader('Client-ID', clientId);
  requestStream.setRequestHeader('Accept', accept);
  // Event 開始
  requestStream.onload = () => {
    if (requestStream.status >= 200 && requestStream.status < 400) {
      // 處理各種可能的錯誤情況
      let streamGame;
      // 如果抓取 JSON 出錯
      try {
        streamGame = JSON.parse(requestStream.response);
      } catch (err) {
        callback(errorMessage);
        return;
      }
      // 如果沒有 prize 的值
      if (!streamGame.streams) {
        callback(errorMessage);
        return;
      }
      // 確定沒出錯後，回傳 callBack 參數如下
      callback(null, streamGame.streams);
    }
  };
  requestStream.onerror = () => {
    callback(errorMessage);
  };
  requestStream.send();
};

// 列出直播列表
const showStream = () => {
  getStream((err, streams) => {
    if (err) {
      alert(err);
      return;
    }
    for (const stream of streams) {
      const box = document.createElement('div');
      document.querySelector('.content').appendChild(box);
      box.outerHTML = `<div class="box">
          <a href="${stream.channel.url}"><img src="${stream.preview.large}" class="box__screen"></a>
          <div class="box__bottom">
              <img src="${stream.channel.logo}" alt="icon" class="icon">
              <div class="information">
                  <h5>${stream.channel.status}</h5>
                  <p>${stream.channel.name}</p>
              </div>
          </div>
      </div>`;
    }
  });
};

// 進入首頁後
getTop5((err, games) => {
  if (err) {
    alert(err);
    return;
  }
  // 處理變動的元件
  for (const game of games) {
    // 拉出五個遊戲，塞成導覽列選項
    const menuItem = document.createElement('li');
    menuItem.innerText = game.game.name;
    document.querySelector('.menu').appendChild(menuItem);
  }
});

window.onload = () => {
  showStream();
  // 監聽導覽列選項
  document.querySelector('nav').addEventListener('click', (e) => {
    // 清除現有的直播列表
    document.querySelector('.content').innerHTML = '';
    // 根據不同情況，列出對應的直播列表
    // 如果是點選 Top5 遊戲選項
    if (e.target.tagName.toLowerCase() === 'li') {
      // 更改頁面標題
      document.querySelector('.title h1').innerText = e.target.innerText;
      twitchStreamAPI = `https://api.twitch.tv/kraken/streams/?game=${e.target.innerText}&limit=20`;
      showStream();
    } else if (e.target.className === 'website__name' || e.target.className === 'logo') {
    // 如果是點選 logo，回到首頁的配置
      // 更改頁面標題
      document.querySelector('.title h1').innerText = 'Welcome';
      // 顯示 Twitch 的 top20 直播
      twitchStreamAPI = 'https://api.twitch.tv/kraken/streams?limit=20';
      showStream();
    }
  });
};
