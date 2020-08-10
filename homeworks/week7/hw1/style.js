/* eslint-disable no-alert, prefer-arrow-callback, func-names, no-restricted-syntax, prefer-const */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.google__form');
  form.addEventListener('submit', function (e) {
    // 禁止表單預設的 submit
    e.preventDefault();

    // 抓取所有文字輸入欄位
    const textInputs = document.querySelectorAll('.required input[type=text], input[type=email]');
    // 抓取所有 radio 欄位
    const radioInputs = document.querySelectorAll('.required input[type=radio]');


    // 先 for loop 檢查文字輸入欄位，如果欄位都有填寫，sumOfTextInputs 要等於 4。
    let sumOfTextInputs = 0;

    for (let textInput of textInputs) {
      if (!textInput.value) {
        textInput.parentNode.classList.remove('hide__error');
      } else {
        textInput.parentNode.classList.add('hide__error');
        sumOfTextInputs += 1;
      }
    }

    // 用 some() 檢查 radio 選項是否有被勾選，只要其中一個被勾選（checked），就要消掉警告訊息。
    const checkRadio = [...radioInputs].some(radio => radio.checked);
    if (!checkRadio) {
      // 如果沒有勾選任一項目，就移除 hide__error class
      radioInputs[0].parentNode.parentNode.classList.remove('hide__error');
    } else {
      radioInputs[0].parentNode.parentNode.classList.add('hide__error');
    }

    // 要同時通過文字輸入欄位的驗證、radio 欄位的驗證，才能 alert 欄位內容。
    if (sumOfTextInputs === 4 && checkRadio) {
      const requireds = document.querySelectorAll('.required > input');
      const radioValue = document.querySelector('.required input[type=radio]:checked');
      let alertMessage = '';
      for (const required of requireds) {
        alertMessage += `${required.name} : ${required.value} \n`;
      }
      alert(`${alertMessage}${radioValue.name} : ${radioValue.value}`);
    }
  });
});
