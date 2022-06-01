const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema(
  
  {  jobtitle: String,
    jobdesc: String,    
    salary:String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "posts must have a user"],
      },
    
   
    categories: [String],
},
 
  { 
      timestamps: true
     },

);

module.exports = mongoose.model("JobPost", JobPostSchema);
