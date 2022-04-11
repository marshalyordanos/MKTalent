
const Comment = require("../model/commentModel");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");








exports.createComment=catchAsync(async(req,res,next)=>{

    if(!req.body.user) req.body.user = req.user.id
    if(!req.body.tour) req.body.post = req.params.postId
    const comment = await Comment.create(req.body)
    

    res.status(200).json({
        status:"success",
        data:comment
    })



})


exports.getAllComment=catchAsync(async(req,res,next)=>{

    const comment = await Comment.find()
    

    res.status(200).json({
        status:"success",
        data:comment
    })



})
exports.getComment=catchAsync(async(req,res,next)=>{

    console.log(req.params)
    const comment = await Comment.findById({_id:req.params.id})
    if(!comment){
        return next(new AppErorr("There is not Comment in this ID",404))
    }
    
    res.status(200).json({
        status:"success",
        data:comment
    })



})


exports.createUpdate=catchAsync(async(req,res,next)=>{

    const comment = await Comment.findByIdAndUpdate({_id:req.params.id},req.body)
    if(!comment){
        return next(new AppErorr("There is not Comment in this ID",404))
    }
    

    res.status(200).json({
        status:"success",
        data:comment
    })



})

exports.createDelete=catchAsync(async(req,res,next)=>{

    const comment = await Comment.findByIdAndDelete({_id:req.params.id})
    if(!comment){
        return next(new AppErorr("There is not Comment in this ID",404))
    }
    

    res.status(200).json({
        status:"success",
        data:comment
    })



})