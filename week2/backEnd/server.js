const http = require('http');
const mongoose = require('mongoose');
const {success, error } = require('./utils/handlers');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:"./config.env"});
const PostsModel = require('./models/Post');

// console.log(process.env.PORT);
// console.log('hello');

mongoose.connect('mongodb://localhost:27017/Post').then(
     () => { console.log("己連接資料庫!!") } ).catch(
          error => {console.log(error)} );

const requestListener = async (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });

    if( (req.url == '/' || req.url == '/posts') && req.method == 'GET' ){
        const allPost = PostsModel.find();
        success(res, allPost);
    }else if(req.url == '/posts' && req.method == 'POST'){

    };//edn of POST method
};
