const request = require('request');
const process = require('process');

request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (error, response, body) => {
    const json = JSON.parse(body);
    if (json.status === 404) {
      console.log('找不到國家資訊');
    }
    for (let i = 0; i < json.length; i += 1) {
      console.log(`============
國家：${json[i].name}
首都：${json[i].capital}
貨幣：${json[i].currencies[0].code}
國碼：${json[i].callingCodes}
      `);
    }
  },
);
