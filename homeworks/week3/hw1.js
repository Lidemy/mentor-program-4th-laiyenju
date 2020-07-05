/* eslint-disable no-shadow */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', line => lines.push(line));

function solve(lines) {
  const N = lines[0];
  let str = '';
  for (let i = 1; i <= N; i += 1) {
    str += '*';
    console.log(str);
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => solve(lines));
