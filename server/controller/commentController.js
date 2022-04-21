/************** import module ****************** */
const Comment = require("../model/commentModel");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

/********************** create post ****************** */
exports.createComment = catchAsync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  if (!req.body.tour) req.body.post = req.params.postId;
  const comment = await Comment.create(req.body);

  res.status(200).json({
    status: "success",
    data: comment,
  });
});

/****************** get all comment ****************/
exports.getAllComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.find();

  res.status(200).json({
    status: "success",
    data: comment,
  });
});
exports.getPostComments = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const comment = await Comment.find({ post: req.params.postId });
  if (!comment) {
    return next(new AppErorr("There is not Comment in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: comment,
  });
});

exports.createUpdate = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!comment) {
    return next(new AppErorr("There is not Comment in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: comment,
  });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  // console.log(req.params);
  const comment = await Comment.findById(req.params.id).populate("post");
  console.log("marshal marshal marshal marshal", comment.post);
  if (req.user.role !== "admin") {
    if (req.params.postId != comment.post.id) {
      return next(new AppErorr("this post has not contan this comment", 400));
    }
    if (req.user.id != comment.user && req.user.id != comment.post.user) {
      return next(new AppErorr("you can not access", 403));
    }
  }
  const deletecomment = await Comment.findByIdAndDelete({ _id: req.params.id });
  if (!comment) {
    return next(new AppErorr("There is not Comment in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: deletecomment,
  });
});
