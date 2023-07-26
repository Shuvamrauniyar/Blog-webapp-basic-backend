const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog-controller');
const userController = require('../controllers/user-controller')
const upload = require('../config/multer_config');

router.post('/uploadBlogs',upload.single('file'), blogController.create);
router.get('/getBlog',blogController.getBlog);
router.get('/getBlog/:id',blogController.getBlog);

router.post('/register', userController.create);
router.post('/login', userController.login);

module.exports = router;