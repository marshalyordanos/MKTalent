
const Post = require("../model/postModel");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");








exports.createPost=catchAsync(async(req,res,next)=>{
    const post = await Post.create(req.body)
    

    res.status(200).json({
        status:"success",
        data:post
    })



})


exports.getAllPost=catchAsync(async(req,res,next)=>{

    const post = await Post.find().populate('comments')
    

    res.status(200).json({
        status:"success",
        data:post
    })



})
exports.getPost=catchAsync(async(req,res,next)=>{

    console.log(req.params)
    const post = await Post.findById({_id:req.params.id})
    if(!post){
        return next(new AppErorr("There is not post in this ID",404))
    }
    
    res.status(200).json({
        status:"success",
        data:post
    })



})


exports.createUpdate=catchAsync(async(req,res,next)=>{

    const post = await Post.findByIdAndUpdate({_id:req.params.id},req.body)
    if(!post){
        return next(new AppErorr("There is not post in this ID",404))
    }
    

    res.status(200).json({
        status:"success",
        data:post
    })



})

exports.createDelete=catchAsync(async(req,res,next)=>{

    const post = await Post.findByIdAndDelete({_id:req.params.id})
    if(!post){
        return next(new AppErorr("There is not post in this ID",404))
    }
    

    res.status(200).json({
        status:"success",
        data:post
    })



})