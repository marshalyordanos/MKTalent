const mongoose  = require('mongoose');
const Validator = require('validator');
const bcrypt = require('bcryptjs')
// const crypto = require('crypto')
const postSchema = new mongoose.Schema({
     images:[String],
     video:String,
     description:String,
     tag:[String],
     audio:String,
     isDraft:Boolean  
  
},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

postSchema.virtual('comments',{
   ref:'Comment',
   foreignField:"post",
   localField:'_id'
})


const Post = mongoose.model('Post',postSchema);


module.exports = Post;