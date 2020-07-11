const request = require('request');
const process = require('process');

// 輸出前 20 本書
if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
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
      console.log(response.statusCode);
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
      console.log(body);
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
      console.log(body);
    },
  );
}
