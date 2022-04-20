const express = require("express");
const { protect } = require("../controller/authController");
const {
  getAllPost,
  createPost,
  getPost,
  deletePost,
  uploadUserPhoto,
  updatePost,
  //   resizeUserPhoto,
  //   uploadUserVideo,
} = require("../controller/postController");
const commentRouter = require("./commentRouter");

const router = express.Router();
// login and signup routes

router.route("/").post(protect, uploadUserPhoto, createPost).get(getAllPost);
router.route("/:id").get(getPost).patch(updatePost).delete(protect, deletePost);

// router.route('/:id').get(getPost)

router.use("/:postId/comments", commentRouter);

module.exports = router;
