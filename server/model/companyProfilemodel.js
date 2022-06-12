const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    coverImage: String,
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
    yearOfExperiance: Number,
    desc: String,
    point: Number,
    languages: [String],
    phone: String,
    Location: String,

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

profileSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "post",
  localField: "_id",
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
