const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema(
  
  {  jobtitle: String,
    jobdesc: String, 
    jobtype:String,   
    salary:String,
    location:String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "posts must have a user"],
      },
    
   
    responsibilities: [String],
    requirements:[String],
},
 
  { 
      timestamps: true
     },

);

const Job= mongoose.model("JobPost", JobPostSchema);
module.exports = Job;