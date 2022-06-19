const mongoose = require("mongoose");
const Validator = require("validator");
const bcrypt = require("bcryptjs");
// const crypto = require('crypto')
const postSchema = new mongoose.Schema(
  {
    dataType: String,
    videoImage: {
      type: String,
      default: "vedioImage",
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    images: [String],
    video: String,
    description: String,
    tag: [String],
    audio: String,
    isDraft: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "posts must have a user"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "post",
  localField: "_id",
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
