const mongoose  = require('mongoose');
const Validator = require('validator');
const bcrypt = require('bcryptjs')
// const crypto = require('crypto')
const commentSchema = new mongoose.Schema({
     message:{
         type:String,
         required:[true,"Message is require"]
     },
     post:{
         type:mongoose.Schema.ObjectId,
         ref:'Post',
         required:[true,"comment must have a post"]
     },
     user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:[true,"comment must have a post"]
    }
  
},{
    timestamps:true
})




const Comment = mongoose.model('Comment',commentSchema);


module.exports = Comment;