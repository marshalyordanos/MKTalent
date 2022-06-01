const express = require("express");
const { protect } = require("../controller/authController");
const {
  createProfile,
  uploadUserPhoto,
} = require("../controller/profileController");

const router = express.Router();
// login and signup routes

router.route("/").post(protect, uploadUserPhoto, createProfile);
// router.route("/:id")

// router.route('/:id').get(getPost)

// router.use("/:postId/comments", commentRouter);

module.exports = router;
