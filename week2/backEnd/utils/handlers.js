const headers = require('./headers');

const success = function(response, data){
    response.writeHead(200, headers);
    response.write( JSON.stringify( {
        result: true,
        data,
    } ));
    response.end();
}

const error = function(response, message){
    response.writeHead(400, headers);
    response.write( JSON.stringify({
        result: false,
        message,
    }) );

    response.end();
}

module.exports = {
    success, 
    error,
}