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
        const allPosts = await PostsModel.find();
        success(res, allPosts);
    }else if(req.url.startsWith('/posts/') && req.method == 'GET'){
        let keyWord = req.url.split('/').pop().trim();
        // console.log(keyWord);
        // console.log(typeof(keyWord));
        let metContent;
        if(keyWord){
            // console.log(keyWord);
            // console.log(typeof(keyWord));
            // keyWord += '';   
            // $regex:  String variable 不能包在 /   /   之內, 測試條件會不成立 
            metContent = await PostsModel.find( {"userContent":{$regex:keyWord, $options:"i"}});
            // console.log(metContent);
            success(res, metContent);
            metContent = '';
            

        }else{
            error(res,`${keyWord} finds nothing!!`);
        }

    }else if(req.url == '/posts' && req.method == 'POST'){
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const newPost = await PostsModel.create( {
                    userName: data.userName,
                    userContent: data.userContent,
                    userPhoto: data.userPhoto,
                    imgUrl: data.imgUrl,

                });//end of PostsModel.create()
                
                success(res, newPost);
                console.log(newPost);

            } catch (error) {
                error(res, "欄位資料不正確!!")
            }
        });//end of req.on()


    };//edn of POST method
};



const server = http.createServer(requestListener);
server.listen( process.env.PORT || 3005);
