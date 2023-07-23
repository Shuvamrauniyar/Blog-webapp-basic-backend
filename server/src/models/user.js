const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    blogPosts: [{ //this is not populating while hitting the post request for blog post 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost'
    }]
},{timestamps: true});

const User =  mongoose.model('User', userSchema);
module.exports = User;