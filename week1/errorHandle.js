function errorHandle(res){  //傳入error
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        'Content-Type': 'application/json'
    };
    res.writeHead(400, headers);//header內寫入 400 status code
    res.write(JSON.stringify(    // response寫入字串化 JSON物件訊息顯示錯誤原因
        {
            "status": "false",
            "message": "欄位未填寫正確，或無此 todo ID"
        }
    ));
    res.end();
}

module.exports = errorHandle;