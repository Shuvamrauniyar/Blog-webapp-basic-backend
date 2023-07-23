const BlogPost = require('../models/blogPost');
const User = require('../models/user');

const path = require('path');
const create = async(data) => {
    try {
        const post = await BlogPost.create(data);
        const user = await User.findById(data.user);
        console.log(user);
        await user.blogPosts.push(post.id);
        await user.save();
        return post;
    } catch (error) {
        console.log('error in repo layer while creating blogpost');
        throw error;
    } 
}
const getBlog = async(filePath) => {
    try {
        // const post = BlogPost.findOne({
        //     postImage: filePath
        // });
        const absolutePath = path.resolve(filePath);
        return absolutePath;
    } catch (error) {
        console.log('error in repo layer while fetching blogpost');
        throw error;
    } 
}
module.exports = { 
    create,
    getBlog
}