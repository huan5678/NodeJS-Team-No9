const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, '名稱為必填!'],
    },
    userContent:{
        type: String, 
        required: [true, '內容為必填!'],
    },
    userPhoto:{
        type: String,
    },
    imgUrl:{
        type: String,
    },
    createdAt:{
        type:Date,
        default: Date.now,

    }

},{
    versionkey: false,
});

const PostsModel = mongoose.model('Post', PostsSchema);
module.exports = PostsModel;