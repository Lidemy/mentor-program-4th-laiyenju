const request = require('request');
const process = require('process');
// 參考答案內將 base url、json 陣列位置個別設定變數，這個好處是維護方便，之後會試著這樣做。
// 關於分情況處理的寫法，參考答案使用 switch case 鎖定輸入值，用來區分情況

// 輸出前 20 本書
if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      if (error) {
        console.log('抓取失敗', error);
      }
      const json = JSON.parse(body);
      for (let i = 0; i < 20; i += 1) {
        console.log(json[i].id, json[i].name);
      }
    },
  );
}

// 輸出特定 id 的書目
if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      if (error) {
        console.log('抓取失敗', error);
      }
      const json = JSON.parse(body);
      console.log(json.id, json.name);
    },
  );
}

// 刪除書目
if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      if (error) {
        console.log('刪除失敗', error);
      }
      console.log(response.statusCode, '刪除成功');
    },
  );
}

// 新增書目
if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: `${process.argv[3]}`,
      },
    },
    (error, response, body) => {
      if (error) {
        console.log('新增失敗', error);
      }
      console.log(body, '新增成功');
    },
  );
}

// 修改書目
if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: `${process.argv[4]}`,
      },
    },
    (error, response, body) => {
      if (error) {
        console.log('更新失敗', error);
      }
      console.log(body, '更新成功');
    },
  );
}
