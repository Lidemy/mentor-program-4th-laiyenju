/* eslint-disable prefer-arrow-callback, func-names, no-restricted-syntax, prefer-const */
// 抓取需要監聽的文字輸入框的內容、表單
const input = document.querySelector('#input__text');
const list = document.querySelector('.list__section');

// 為安全性而生的跳脫字串
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 監聽文字輸入框，按下 Enter 鍵就新增一個 list item
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // listContent 是輸入的文字
    let listContent = input.value;
    // 如果文字輸入欄是空白，就算 enter 送出也無法新增項目
    if (!input.value) return;
    // 新增列表，並使用 insertBefore() 將輸入文字塞入列表的開頭
    const listItem = document.createElement('div');
    list.insertBefore(listItem, list.childNodes[0]);
    listItem.outerHTML = `
    <div class="list__content">

      <input type="checkbox">
      <label class="list__text">${escapeHtml(listContent)}</label>
      <span class="material-icons remove">delete_outline</span>
    </div>
    `;
    // 讓 input.value 為空字串，消除輸入框內的文字
    input.value = '';
  }
});

// 用 click 搭配 event delegation 方式監聽父層 list，for loop 檢查 checkbox 是否有被勾選()、檢查是否有按到刪除鈕。
// 如果 checkbox 被勾選，要把項目中的文字劃掉。如果按了刪除紐，要把項目刪掉。
list.addEventListener('click', function (e) {
  // 偵測到 click 後才抓取 checkbox
  const checkboxItems = document.querySelectorAll('input[type=checkbox]');
  for (let checkboxItem of checkboxItems) {
    if (checkboxItem.checked) {
      checkboxItem.parentNode.classList.add('finish');
    } else {
      checkboxItem.parentNode.classList.remove('finish');
    }
  }

  // 使用 e.target 監測 click 到的元件是什麼，使用 e.target.classList.contain() 檢查是不是刪除鍵
  // 因為刪除鍵設定的 class 是 remove，如果點選到的元件擁有 remove class，就確認是刪除鍵，可以刪除此項目。
  if (e.target.classList.contains('remove')) {
    e.target.parentNode.remove('e.target');
  }
});
