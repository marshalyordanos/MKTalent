const express = require('express');
const { protect } = require('../controller/authController');
const { createComment } = require('../controller/commentController');


const router  = express.Router({mergeParams:true});

// login and signup routes


router.route('/').post(protect,createComment)
// router.route('/:id').get(getPost)





module.exports = router