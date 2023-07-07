const express = require('express');
const dbConnect = require('./config/db_config');

require('dotenv').config();
const PORT = process.env.PORT;

const bodyParser = require('body-parser');
// const upload = require('./config/multer_config');
const app = express();

const User = require('./models/user');
const BlogPost = require('./models/blogPost');

const {getBlog} = require('./repository/blog-repo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const apiRoutes = require('./routes/index');

const startServer = () =>{
    app.listen(PORT, async()=>{
        console.log(`Server started at ${PORT}`);
         await dbConnect();
        console.log('Database connected Successfully');
       
        app.use('/api',apiRoutes);
    
      
    });
}
startServer();

/*
 // const response = await BlogPost.create({
        //     content: 'This is my first blog post',
        //     user: '64a71e18fd4e90d70bcba647'
        // });
        // console.log('response is ', response.user );


          // app.post('/uploadFile',upload.single('image'),(req,res) => {
            //     console.log(req);
            //     res.send({
            //         filepath: req.file.path
            //     })
            // })  


      //    app.use('/images', express.static('./uploads'));


            app.get('/getImage/:filePath', async(req, res) => {
            // console.log("hello "+req.body.filePath);
            // const absoluteImagePath = await getBlog(req.params.filePAth);
            console.log('hit at 3000');
            //console.log(req.params.id);
            res.send(req.params.id);
          //  res.sendFile(req.params.filename);
          });
        // } catch (error) {
        //     res.send({
        //         err:'Couldnot upload the file'
        //     })
        // }
*/


