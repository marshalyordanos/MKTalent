const express = require("express");
const { protect } = require("../controller/authController");
const {
  createReward,
  uploadUserPhoto,
  getAllReward,

  updateRewards,
} = require("../controller/rewardController");

const router = express.Router();

router
  .route("/")
  .post(protect, uploadUserPhoto, createReward)
  .get(getAllReward);
router.route("/:id").patch(protect, uploadUserPhoto, updateRewards);
module.exports = router;
