const User = require('../models/user');
const create = async(data) => {
    try {
        const user = await User.create(data);
        return user;
    } catch (error) {
        console.log('error in repo layer while creating user account');
        throw error;
    } 
}
const getUser = async(emailId) => {
    try {
        const post = await BlogPost.findOne({
            email: emailId
        });
        return post;
    } catch (error) {
        console.log('error in repo layer while fetching user details');
        throw error;
    } 
}
module.exports = {
    create,
    getUser
}