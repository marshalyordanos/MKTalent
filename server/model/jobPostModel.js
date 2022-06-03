const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema(
  
  {  jobtitle: String,
    jobdesc: String,    
    salary:String,
    location:String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true],
      },
    
   
    categories: [String],
},
 
  { 
      timestamps: true
     },

);

module.exports = mongoose.model("JobPost", JobPostSchema);
