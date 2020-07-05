/* eslint-disable no-shadow */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', line => lines.push(line));

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容

const digits = (num) => {
  const digitNumber = String(num).length;
  return digitNumber;
};

const sum = (num) => {
  const digitNumber = digits(num);
  let total = 0;
  for (let i = 0; i < digitNumber; i += 1) {
    const number = Number(String(num)[i]);
    total += number ** digitNumber;
  }
  return total;
};

function solve(lines) {
  const arr = lines[0].split(' ');
  const N = Number(arr[0]);
  const M = Number(arr[1]);
  for (let i = N; i <= M; i += 1) {
    if (sum(i) === i) {
      console.log(i);
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => solve(lines));
