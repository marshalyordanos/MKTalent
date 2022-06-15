const express = require("express");
const { protect } = require("../controller/authController");
const {
  createProfile,
  uploadUserPhoto,
  updatePost,
  getProfile,
  getAllProfile,
  filterProfile,
} = require("../controller/profileController");

const router = express.Router();
// login and signup routes

router
  .route("/")
  .post(protect, uploadUserPhoto, createProfile)
  .get(getAllProfile);
// router.route("/:id")

router
  .route("/:id")
  .patch(protect, uploadUserPhoto, updatePost)
  .get(protect, getProfile);

router.route("/filter/:id").get(filterProfile);

// router.use("/:postId/comments", commentRouter);

module.exports = router;
