const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog-controller');
const userController = require('../controllers/user-controller')
const upload = require('../config/multer_config');

router.post('/uploadBlogs',upload.single('image'), blogController.create);
router.get('/getPost/:filename',blogController.getBlog);

router.post('/signup', userController.create);

module.exports = router;