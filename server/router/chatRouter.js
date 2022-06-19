const express = require("express");
const { protect } = require("../controller/authController");
const { getAllChats, createChat } = require("../controller/chatController");

const router = express.Router();
// login and signup routes
router.route("/chats").post(protect, createChat);
router.route("/addchats").post(protect, getAllChats);

// router.route('/:id').get(getPost)

module.exports = router;
