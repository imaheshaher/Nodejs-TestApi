const express = require('express');
const {Demo} = require('../controller/demo.controller')
const Blog = require('../controller/blogController');
const router = express.Router();
const multer =require('multer')

const upload = multer()
router.get('/demo',Demo)

// **************** Blog *******************

// router.post('/blog/create',upload.fields([]),Blog.create); //this for form data
router.post('/blog/create',Blog.create); //this for json data

router.get('/blog/get',Blog.getblog);

router.post('/blog/detail',Blog.detail);

router.post('/blog/delete',Blog.delete);
// ******************** End BLOG *****************
module.exports = router;