const express = require('express');
const {Demo} = require('../controller/demo.controller')
const Blog = require('../controller/blogController');
const Venue = require('../controller/venueController')
const Test = require('../controller/testController')

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


router.get('/venue/get',Venue.getvenue);



router.post('/test/create',Test.create)
router.get('/test/get',Test.get)
module.exports = router;