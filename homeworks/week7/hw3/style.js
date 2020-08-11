/* eslint-disable prefer-arrow-callback, func-names, no-restricted-syntax, prefer-const */
// 抓取需要監聽的文字輸入框的內容、表單
const input = document.querySelector('#input__text');
const list = document.querySelector('.list__section');

// 監聽文字輸入框，按下 Enter 鍵就新增一個 list item
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // listContent 是輸入的文字
    const listContent = input.value;
    // 新增列表，並將輸入的文字塞入列表
    const listItem = document.createElement('div');
    list.appendChild(listItem);
    listItem.outerHTML = `
    <div class="list__content">
      <input type="checkbox">
      <label class="list__text">${listContent}</label>
      <span class="material-icons remove">delete_outline</span>
    </div>
    `;
  }
});


// 用 click 搭配 event delegation 方式監聽父層 list，for loop 檢查 checkbox 是否有被勾選()，如果 checkbox 被勾選，要把項目中的文字劃掉。
list.addEventListener('click', function () {
  // 偵測到 click 後才抓取 checkbox
  const checkboxItems = document.querySelectorAll('input[type=checkbox]');
  for (let checkboxItem of checkboxItems) {
    if (checkboxItem.checked) {
      checkboxItem.parentNode.classList.add('finish');
    } else {
      checkboxItem.parentNode.classList.remove('finish');
    }
  }
});

// 監聽刪除鍵，使用 e.target 監測 click 到的元件是什麼，使用 e.target.classList.contain() 檢查是不是刪除鍵
list.addEventListener('click', function (e) {
  // 因為刪除鍵設定的 class 是 remove，如果點選到的元件擁有 remove class，就確認是刪除鍵，可以刪除此項目。
  if (e.target.classList.contains('remove')) {
    e.target.parentNode.remove('e.target');
  }
});
