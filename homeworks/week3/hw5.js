/* eslint-disable no-shadow, no-undef */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', line => lines.push(line));

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  const M = Number(lines[0]);
  for (let i = 1; i <= M; i += 1) {
    const [a, b, rule] = lines[i].split(' ');
    if (BigInt(a) === BigInt(b)) {
      console.log('DRAW');
    } else if ((BigInt(a) > BigInt(b) && rule === '1') || (BigInt(a) < BigInt(b) && rule === '-1')) {
      console.log('A');
    } else {
      console.log('B');
    }
  }
}

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => solve(lines));
