const http = require('http');
const getTodo = require('./getTodo');
const postTodo = require('./postTodo');
const patchTodo = require('./patchTodo');
const deleteTodo = require('./deleteTodo');
const todos = [];//todoList 初始狀態

const headers = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
  'Content-Type': 'application/json',
};

const requestListener = (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  if (req.url == '/todos' && req.method == 'GET') {
    // getTodo.js
    getTodo(res, todos, headers);//取得todoList
  } else if (req.url == '/todos' && req.method == 'POST') {
    // postTodo.js
    postTodo(req, res, todos, headers);//增加todoList
  } else if (req.url == '/todos' && req.method == 'DELETE') {
    // deleteTodo.js
    deleteTodo(req, res, todos, headers);//刪除多筆todoLists
  } else if (req.url.startsWith('/todos/') && req.method == 'DELETE') {
    // deleteTodo.js
    deleteTodo(req, res, todos, headers);//刪除單筆todoList
  } else if (req.url.startsWith('/todos/') && req.method == 'PATCH') {
    patchTodo(req, res, todos, headers);//修改單筆todoList
  } else if (req.method == 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers);
    res.write(
      JSON.stringify({
        status: 'false',
        message: '無此網站路由',
      })
    );
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3005);
