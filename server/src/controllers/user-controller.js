const User = require('../models/user');

const create = async(req,res) =>{
    const {username,password} = req.body;
    console.log(username,password);
  try{
    const userDoc = await User.create({
      username,
      password
    });
    res.status(200).json(userDoc);
    } catch (error) {
        console.log('error while creating user\n',error);
        res.status(500).json({
            success: false,
            msg: 'error while creating user ',
            err: error
        })       
    }
}

const login = async (req,res) => {
    const {username,password} = req.body;
    console.log(password);
    const userDoc = await User.findOne({username});
    console.log("userdoc",userDoc);
    if(userDoc.password == password){
      console.log('matched');
        res.status(200).json({
            id:userDoc._id,
            username,
          });
    }
     else {
      res.status(400).json('wrong credentials');
    }
  }
module.exports= {
    create,
    login
}