const express = require('express');
const { getAllPost, createPost, getPost } = require('../controller/postController');
const commentRouter = require('./commentRouter')

const router  = express.Router();

// login and signup routes



router.route('/').post(createPost).get(getAllPost)
// router.route('/:id').get(getPost)

router.use('/:postId/comments',commentRouter)



module.exports = router