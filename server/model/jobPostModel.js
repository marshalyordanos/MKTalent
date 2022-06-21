const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema(
  {
    jobtitle: String,
    jobdesc: String,
    jobtype: String,
    salary: String,
    location: String,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "posts must have a user"],
    },

    appliedUser: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        unique: true,
      },
    ],
    approvedUser: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        unique: true,
      },
    ],
    declineUser: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        unique: true,
      },
    ],

    responsibilities: [String],
    requirements: [String],
  },

  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobPostSchema);
module.exports = Job;
