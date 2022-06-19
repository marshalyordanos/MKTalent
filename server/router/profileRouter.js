const express = require("express");
const { protect } = require("../controller/authController");
const {
  createProfile,
  uploadUserPhoto,

  getProfile,
  getAllProfile,
  filterProfile,
  updateProfile,
  getAllProfileById,
} = require("../controller/profileController");

const router = express.Router();
// login and signup routes

router
  .route("/")
  .post(protect, uploadUserPhoto, createProfile)
  .get(getAllProfile);
// router.route("/:id")
router.get("/allusers/:id", getAllProfileById);

router
  .route("/:id")
  .patch(protect, uploadUserPhoto, updateProfile)

  .get(protect, getProfile);

router.route("/filter/:id").get(filterProfile);

// router.use("/:postId/comments", commentRouter);

module.exports = router;
