const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    postImage:{
        type:String
    },
    content:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{timestamps: true});

const BlogPost =  mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;