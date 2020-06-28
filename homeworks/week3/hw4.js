/* eslint-disable no-shadow */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', line => lines.push(line));


// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
const reversed = (inputString) => {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i -= 1) {
    reversedString += inputString[i];
  }
  return reversedString;
};

function solve(lines) {
  const inputString = lines[0];

  if (reversed(inputString) === inputString) {
    console.log('True');
  } else {
    console.log('False');
  }
}

rl.on('close', () => solve(lines));
