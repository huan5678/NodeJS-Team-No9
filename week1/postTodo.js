const { v4: uuidv4 } = require('uuid');
const errorHandle = require('./errorHandle');

const postTodo = (req, res, todos) => {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
  };
  /** http 傳來的 body 資訊 */
  let body = '';

  // 監聽 req 當 req 收到片段的 chunk 時，將片段資料加入 body 內。
  req.on('data', chunk => {
    body += chunk;
  });

  // 監聽 req 當 req 收完資料時，執行新增單筆代辦的功能
  req.on('end', () => {
    try {
      const title = JSON.parse(body).title;
      if (title !== undefined) {
        const todo = {
          "title": title,
          "id": uuidv4()
        };
        todos.push(todo);
        res.writeHead(200, headers);
        res.write(JSON.stringify({
            "status": 'success',
            "data": todos
        }));
        res.end();
      } else {
        errorHandle(res);
      }
    } catch {
        errorHandle(res);
    }
  });
};

module.exports = postTodo;