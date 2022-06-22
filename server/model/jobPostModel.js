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
      },
    ],
    approvedUser: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    declineUser: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
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
