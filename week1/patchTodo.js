const errorHandle = require('./errorHandle');

const patchTodo = (req, res, todos, headers) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const todo = JSON.parse(body).title;
      const id = req.url.split('/').pop();
      const index = todos.findIndex((element) => element.id == id);
      if (todo !== undefined && index !== -1) {
        todos[index].title = todo;
        res.writeHead(200, headers);
        res.write(
          JSON.stringify({
            status: 'success',
            data: todos,
          })
        );
        res.end();
      } else {
        errHandle(res);
      }
    } catch {
      errHandle(res);
    }
  });
};

module.exports = patchTodo;
