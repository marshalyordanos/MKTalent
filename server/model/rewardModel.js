const mongoose = require("mongoose");
// const crypto = require('crypto')
const rewardSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Reward must have a User"],
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Reward = mongoose.model("Reward", rewardSchema);

module.exports = Reward;
