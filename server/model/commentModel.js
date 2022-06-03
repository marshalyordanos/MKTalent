const mongoose = require("mongoose");
// const crypto = require('crypto')
const commentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "Message is require"],
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: [true, "comment must have a post"],
    },
    user: Object,
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
