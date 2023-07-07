const BlogPost = require('../repository/blog-repo');

const create = async(req,res) =>{
    try {
        if(req.file){
            req.body.postImage =  req.file.path;
            console.log(req.file.path);
        }
        console.log(req.body);
        const post = await BlogPost.create(req.body);
        return res.status(200).json({
            success: true,
            msg: 'Successfully created posts',
            err:{},
            content: post
        });
    } catch (error) {
        console.log('error while creating ');
        res.status(500).json({
            success: false,
            msg: 'error while creating blog post',
            err: error
        })       
    }
}
const getBlog = async(req,res) =>{
    try {
        const blog = await BlogPost.getBlog(req.body.filePath);
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
module.exports = {
    create,
    getBlog
}