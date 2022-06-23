const express = require("express");
const { protect } = require("../controller/authController");
const {
  createEvent,
  getAllEvent,
  deleteEvent,
  getEvent,
  updateEvent,
} = require("../controller/eventController");

const router = express.Router();

router.route("/createEvent").post(protect, createEvent);
router.route("/deleteEvent").delete(protect, deleteEvent);
router.route("/getallEvent").get(getAllEvent);
router.route("/:id").get(getEvent);
router.route("/updateEvent/:id").patch(protect, updateEvent);

module.exports = router;
