const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    follower: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    jobs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Job",
        unique: true,
      },
    ],
    approvedJob: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Job",
        unique: true,
      },
    ],
    likes: {
      type: Number,
      default: 0,
    },
    coverImage: {
      type: String,
      default: "cover.jpg",
    },
    profileImage: {
      type: String,
      default: "profile.jpg",
    },
    age: Number,
    height: Number,
    weight: Number,
    talentType: String,
    rating: Number,
    ratingUser: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        unique: true,
      },
    ],
    ratingAvarage: {
      type: Number,
      default: 3,
    },
    magicalRating: Number,
    freinds: [Object],
    totalLikes: {
      type: Number,
      default: 0,
    },
    yearOfExperiance: Number,
    desc: String,
    point: {
      type: Number,
      default: 5.5,
    },
    languages: [String],
    phone: String,
    Location: String,

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      unique: true,
      required: [true, "posts must have a user"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

profileSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "post",
  localField: "_id",
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
