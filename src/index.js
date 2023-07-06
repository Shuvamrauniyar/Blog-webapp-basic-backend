const express = require('express');
const dbConnect = require('./config/db_config');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
const User = require('./models/user');
const BlogPost = require('./models/blogPost');

app.listen(PORT, async()=>{
    console.log('Server started');
     await dbConnect();
    console.log('Database connected Successfully');
    // const response = await BlogPost.create({
    //     content: 'This is my first blog post',
    //     user: '64a71e18fd4e90d70bcba647'
    // });
    // console.log('response is ', response.user );
})



