/********************************* import modules ************************************** */
const Comment = require("../model/commentModel");
const Post = require("../model/postModel");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");

/**************** multer storage ************************* */
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, "../public/assets/img/post");
    } else if (file.mimetype.startsWith("audio")) {
      cb(null, "../public/assets/audio");
    } else if (file.mimetype.startsWith("video")) {
      cb(null, "../public/assets/video");
    }
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  },
});

/******************** multer fields ************************ */
const multerFilter = (req, file, cb) => {
  console.log(file);
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else if (file.mimetype.startsWith("audio")) {
    cb(null, true);
  } else if (file.mimetype.startsWith("video")) {
    cb(null, true);
  } else {
    cb(new AppErorr("Please Enter Valid file type", 400));
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadUserPhoto = upload.fields([
  { name: "images", maxCount: 5 },
  { name: "audio", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);

/********************* create post  */

exports.createPost = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  console.log(req.files);
  if (req.files.images) {
    req.body.images = [];
    req.files.images.map((file) => req.body.images.push(file.filename));
  }
  if (req.files.video) {
    req.body.video = req.files.video[0].filename;
  }
  if (req.files.audio) {
    req.body.audio = req.files.audio[0].filename;
  }
  console.log(req.body);
  const post = await Post.create(req.body);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

/****************************** get all posts ****************** */
exports.getAllPost = catchAsync(async (req, res, next) => {
  const post = await Post.find().populate("comments");

  res.status(200).json({
    length: post.length,
    status: "success",
    data: post,
  });
});

/*********************** get one post *********************** */
exports.getPost = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const post = await Post.findById({ _id: req.params.id });
  if (!post) {
    return next(new AppErorr("There is not post in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!post) {
    return next(new AppErorr("There is not post in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findById({ _id: req.params.id });

  console.log(req.user.id == post.user);
  if (!(req.user.id == post.user)) {
    return next(new AppErorr("this is not your post", 404));
  }

  const postDelete = await Post.findByIdAndDelete({ _id: req.params.id });
  if (!post) {
    return next(new AppErorr("There is not post in this ID", 404));
  }

  const comment = await Comment.deleteMany({ post: req.params.id });

  if (post.images) {
    const path = post.images;

    try {
      path.map((p) => fs.unlinkSync(`../public/assets/img/post/${p}`));
      console.log(
        "marshal marshal marshal marshal marshal marshal betelhem betelhem betelhem betelhem"
      );
      //file removed
    } catch (err) {
      console.error(err);
    }
  }
  if (post.video) {
    const path = post.vedio;

    try {
      fs.unlinkSync(`../public/assets/video/${path}`);
      console.log(
        "marshal marshal marshal marshal marshal marshal betelhem betelhem betelhem betelhem"
      );
      //file removed
    } catch (err) {
      console.error(err);
    }
  }
  if (post.audio) {
    const path = post.audio;

    try {
      fs.unlinkSync(`../public/assets/audio/${path}`);
      console.log(
        "marshal marshal marshal marshal marshal marshal betelhem betelhem betelhem betelhem"
      );
      //file removed
    } catch (err) {
      console.error(err);
    }
  }
  res.status(200).json({
    status: "success",
    data: post,
  });
});
