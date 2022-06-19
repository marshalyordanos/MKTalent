const express = require("express");
const { protect } = require("../controller/authController");
const {
  createJob,
  getAllJob,
  deleteJob,
  getJob,
  updateJob,
} = require("../controller/jobController");

const router = express.Router();

router.route("/createjob").post(protect, createJob);
router.route("/deletejob").delete(protect, deleteJob);
router.route("/getalljob").get(getAllJob);
router.route("/:id").get(getJob);
router.route("/updatepjob").patch(protect, updateJob);

module.exports = router;
