const express = require("express");
const { signup, login, protect } = require("../controller/authController");
const {
  getAllUser,
  getUser,
  updateMe,
  updatePassword,
} = require("../controller/userController");

const router = express.Router();

// login and signup routes
router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/").get(getAllUser);
router.route("/:id").get(getUser);
router.patch("/updateMe", protect, updateMe);
router.patch("/updateMyPassword", protect, updatePassword);
module.exports = router;
