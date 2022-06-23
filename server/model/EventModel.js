const mongoose = require("mongoose");

const EventPostSchema = new mongoose.Schema(
  {
    eventname: {
      type: String,
    unique:true
    },
   
eventtype: String,
location: String,
description: String,
duration: String,
targetaudience: String,
incollabwith: String,

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
  }, 
{
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventPostSchema);
module.exports = Event;
