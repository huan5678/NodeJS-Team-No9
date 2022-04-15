const { v4: uuidv4 } = require('uuid');
const errorHandle = require('./errorHandle');
const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
};
const All= (req, res, todos) =>{
    todos.length = 0;
    res.writeHead(200, headers);
    res.write(
      JSON.stringify({
        status: "success",
        data: todos,
        "delete": "yes"
      })
    );
    res.end();
}
const One= (req, res, todos) =>{
    const id = req.url.split("/").pop();
    const index = todos.findIndex((el) => {
      return el.id === id;
    });
    if (index !== -1) {
      todos.splice(index, 1);
      res.writeHead(200, headers);
      res.write(
        JSON.stringify({
          status: "success",
          data: todos
        })
      );
      res.end();
    } else {
      errHandle(res);
    }
}
module.exports = {
    All,
    One
}

