/* eslint-disable consistent-return */
const request = require('request');
const process = require('process');

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';
const action = process.argv[2];
const params = process.argv[3];

function listBooks() {
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  });
}

function readBook(id) {
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    console.log(data);
  });
}

function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (err) => {
    if (err) {
      return console.log('刪除失敗', err);
    }
    console.log('刪除成功！');
  });
}

function createBook(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name,
    },
  }, (err, res, body) => {
    if (err) {
      return console.log('新增失敗', err);
    }
    console.log(body, '新增成功！');
  });
}

function updateBook(id, name) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      name,
    },
  }, (err, res, body) => {
    if (err) {
      return console.log('更新失敗', err);
    }
    console.log(body, '更新成功！');
  });
}

switch (action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBook(params);
    break;
  case 'delete':
    deleteBook(params);
    break;
  case 'create':
    createBook(params);
    break;
  case 'update':
    updateBook(params, process.argv[4]);
    break;
  default:
    console.log('Available commands: list, read, delete, create and update');
}
