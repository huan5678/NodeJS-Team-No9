const errorHandle = require('./errorHandle');
const headers = require('./headers');

const deleteTodo = (req, res, todos, headers) => {
    
        if(req.url == "/todos" && req.method == "DELETE"){
            todos.length = 0;
            res.writeHead(200, headers);
            res.write(JSON.stringify({
                "status": "success",
                "data": todos,
            }));//end of write()
            res.end();
        }else if(req.url.startsWith("/todos/") && req.method == "DELETE"){
            const id = req.url.split('/').pop();// pop() 抓最後一筆資訊
            const index = todos.findIndex(element => element.id == id);
            console.log(id, index);

            if(index !== -1){
                todos.splice(index, 1);//刪除一筆
                res.writeHead(200, headers);
                res.write(JSON.stringify({
                "status": "success",
                "data": todos,
                })); // end of write()
                res.end();
            }else{
                errorHandle(res);
            }
            
        }
    

};//end of deleteTodo

module.exports = deleteTodo;