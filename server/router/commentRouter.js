const express = require("express");
const { protect } = require("../controller/authController");
const {
  createComment,
  getPostComments,
  deleteComment,
} = require("../controller/commentController");

const router = express.Router({ mergeParams: true });

// login and signup routes

router.route("/").post(protect, createComment).get(getPostComments);
router.route("/:id").delete(protect, deleteComment);

// router.route('/:id').get(getPost)

module.exports = router;
