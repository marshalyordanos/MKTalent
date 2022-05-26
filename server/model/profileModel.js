const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    coerImage: String,
    profileImage: String,
    age: Number,
    height: Number,
    weight: Number,
    talentType: String,
    rating: String,
    ratingAvarage: String,
    magicalRating: String,
    freinds: [Object],
    totalLikes: Number,

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
