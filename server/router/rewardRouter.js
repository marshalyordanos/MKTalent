const express = require("express");
const { protect } = require("../controller/authController");
const {
  createReward,
  uploadUserPhoto,
  getAllReward,
} = require("../controller/rewardController");

const router = express.Router();

router
  .route("/")
  .post(protect, uploadUserPhoto, createReward)
  .get(getAllReward);
module.exports = router;
