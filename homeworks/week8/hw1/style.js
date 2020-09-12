/* eslint-disable no-alert */
const request = new XMLHttpRequest();
const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';

const lotteryButton = document.querySelector('button');
lotteryButton.addEventListener('click', () => {
  request.open('GET', apiUrl, true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const infoCard = document.querySelector('.card');
      const infoOrigin = document.querySelector('.list');
      const infoNew = document.querySelector('.result');
      const background = document.querySelector('.banner');
      infoOrigin.classList.add('hide');
      infoNew.classList.remove('hide');
      const response = request.responseText;
      // 取出抽獎的結果
      const result = JSON.parse(response).prize;

      switch (result) {
        case 'FIRST':
          infoNew.innerHTML = '恭喜你中頭獎了！日本東京來回雙人遊！';
          infoNew.style.color = 'black';
          infoCard.style.backgroundColor = '#ffffff';
          background.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("img/first-bg.jpg")';
          break;
        case 'SECOND':
          infoNew.innerHTML = '二獎！90 吋電視一台！';
          infoNew.style.color = 'black';
          infoCard.style.backgroundColor = '#ffffff';
          background.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("img/second-bg.jpg")';
          break;
        case 'THIRD':
          infoNew.innerHTML = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
          infoNew.style.color = 'black';
          infoCard.style.backgroundColor = '#ffffff';
          background.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("img/third-bg.jpg")';
          break;
        case 'NONE':
          infoNew.innerHTML = '銘謝惠顧';
          infoNew.style.color = 'white';
          background.style.background = 'black';
          infoCard.style.backgroundColor = 'transparent';
          break;
        default:
          // do nothing
      }
    } else {
      // 回傳的獎項不是以上四種，或是Server直接回傳錯誤，請跳出提示視窗（alert)
      alert('系統不穩定，請再試一次');
    }
  };

  request.onerror = () => {
    console.log('error');
  };

  request.send();
});
