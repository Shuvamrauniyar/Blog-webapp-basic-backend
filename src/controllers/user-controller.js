const UserRepo = require('../repository/user-repo');

const create = async(req,res) =>{
    try {
        console.log('userrepo');
        const user = await UserRepo.create(req.body);
        return res.status(200).json({
            success: true,
            msg: 'Successfully created user account',
            err:{},
            content: user
        });
    } catch (error) {
        console.log('error while creating user');
        res.status(500).json({
            success: false,
            msg: 'error while creating user ',
            err: error
        })       
    }
}
module.exports= {
    create
}