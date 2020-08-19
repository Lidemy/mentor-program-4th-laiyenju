/* eslint-disable prefer-arrow-callback, func-names, no-restricted-syntax, prefer-const */
// 抓取所有問題列表
const questions = document.querySelectorAll('.question__card');
for (let question of questions) {
  // 把監聽器安裝在個別問題上，使用 toggle 根據現在的答案顯示狀況，決定要隱藏或公開答案。
  question.addEventListener('click', function () {
    const answer = question.querySelector('.question .answer');
    answer.classList.toggle('hide__answer');
  });
}
