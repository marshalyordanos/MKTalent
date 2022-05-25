const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema(
  
  {  title: String,
    desc: String,    
    photo:[String],
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

module.exports = mongoose.model("BlogPost", BlogPostSchema);
