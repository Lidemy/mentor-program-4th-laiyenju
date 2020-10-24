/* eslint-disable no-alert */
const request = new XMLHttpRequest();
const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const errorMessage = '系統不穩定，請再試一次';

// 分成「抽獎 API」、「頁面變化」兩個 function
// 抽獎 function
const lottery = (callback) => {
  request.open('GET', apiUrl, true);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
    // 處理可能的各種錯誤情況：抓取 JSON 出錯、沒有 prize 的值，回傳 callBack 參數
      let result;
      // 如果抓取 JSON 出錯
      try {
        result = JSON.parse(request.response);
      } catch (err) {
        callback(errorMessage);
        return;
      }
      // 如果沒有 prize 的值
      if (!result.prize) {
        callback(errorMessage);
        return;
      }
      // 確定沒出錯後，回傳 callBack 參數如下
      callback(null, result);
    }
  };
  request.onerror = () => {
    callback(errorMessage);
  };
  request.send();
};

// 頁面變化
const lotteryButton = document.querySelector('.origin__button');
lotteryButton.addEventListener('click', () => {
  lottery((err, result) => {
    if (err) {
      alert(err);
      return;
    }
    // 拉出會因應抽獎結果變動的元件
    const infoOrigin = document.querySelector('.card');
    const infoNew = document.querySelector('.result');
    const resultTitle = document.querySelector('.result > .title');
    const background = document.querySelector('.banner');

    // 不同抽獎結果的畫面
    let backgroundStyle;
    let titleText;
    if (result.prize === 'FIRST') {
      titleText = '恭喜你中頭獎了！日本東京來回雙人遊！';
      backgroundStyle = 'first__background';
    } else if (result.prize === 'SECOND') {
      titleText = '二獎！90 吋電視一台！';
      backgroundStyle = 'second__background';
    } else if (result.prize === 'THIRD') {
      titleText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
      backgroundStyle = 'third__background';
    } else if (result.prize === 'NONE') {
      titleText = '銘謝惠顧';
      backgroundStyle = 'none__background';
    }

    // 元件變動的方式
    background.classList.add(backgroundStyle);
    resultTitle.innerText = titleText;
    infoOrigin.classList.add('hide');
    infoNew.classList.remove('hide');
  });
});
