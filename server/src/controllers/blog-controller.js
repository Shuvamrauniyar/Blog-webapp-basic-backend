const Post = require('../models/blogPost');
const User = require('../models/user');
const fs = require('fs');
const create = async(req,res) =>{
    try {
        console.log(req.body);
            const {originalname,path} = req.file;
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            const newPath = path+'.'+ext;
            fs.renameSync(path, newPath);
          
            const {title,summary,content} = req.body;
              const postDoc = await Post.create({
                title,
                summary,
                content,
                cover:newPath,
                // author:info.id,
              });
              res.status(200).json(postDoc); 
    } catch (error) {
        console.log('error while creating ');
        res.status(500).json({
            success: false,
            msg: 'error while creating blog post',
            err: error
        })       
    }
}
const update = async(req,res) =>{
    try {
        let newPath = null;
        if (req.file) {
          const {originalname,path} = req.file;
          const parts = originalname.split('.');
          const ext = parts[parts.length - 1];
          newPath = path+'.'+ext;
          fs.renameSync(path, newPath);
        }
    
          const {id,title,summary,content} = req.body;
          const postDoc = await Post.findById(id);
          const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
          if (!isAuthor) {
            return res.status(400).json('you are not the author');
          }
          await postDoc.update({
            title,
            summary,
            content,
            cover: newPath ? newPath : postDoc.cover,
          });
      
          res.json(postDoc);
    } catch (error) {
        console.log('error while updating ');
        res.status(500).json({
            success: false,
            msg: 'error while updating blog post',
            err: error
        })       
    }
}
const getBlog = async(req,res) =>{
    try {
        const blog = await  Post.find().populate('author', ['username']).sort({createdAt: -1}).limit(20);
        //const blog = req.params.filename; 
        console.log(blog);
        return res.status(200).json({
            success: true,
            msg: 'Successfully fetched posts',
            err:{},
            content: blog
        });
    } catch (error) {
        console.log('error while fetching ');
        res.status(500).json({
            success: false,
            msg: 'error while fetching blog post',
            err: error
        })       
    }
}

const getById = async(req,res) => {
    try {
        const {id} = req.params;
        const postDoc = await Post.findById(id).populate('author', ['username']);
        res.json(postDoc);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    create,
    update,
    getBlog,
    getById
}