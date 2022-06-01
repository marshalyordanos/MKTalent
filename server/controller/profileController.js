/********************************* import modules ************************************** */
const Profile = require("../model/profileModel");
const multer = require("multer");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
/**************** multer storage ************************* */
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, "../public/assets/img/profile");
    }
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  },
});

/******************** multer fields ************************ */
const multerFilter = (req, file, cb) => {
  console.log(file, "marshal");
  if (file.mimetype.startsWith("image")) {
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
  { name: "profileImage", maxCount: 1 },
  { name: "coverImage", maxCount: 1 },
]);

/********************* create post  */

exports.createProfile = catchAsync(async (req, res, next) => {
  //   req.body.user = req.user.id;
  console.log(req.files.coverImage, req.body);

  // const post = await Profile.create(req.body);

  res.status(200).json({
    status: "success",
    // data: post,
  });
});

/****************************** get all posts ***************** ********************************************************************** */
// exports.getAllPost = catchAsync(async (req, res, next) => {
//   let query = Post.find();
//   console.log(req.query);
//   const page = req.query.page * 1 || 1;
//   const limit = +req.query.limit || 100;

//   const skip = (page - 1) * limit;
//   query.skip(skip).limit(limit);
//   query.sort("-createdAt");
//   const post = await query.populate("comments").populate("user");
//   const posts = await Post.find();

//   res.status(200).json({
//     totalLength: posts.length,
//     length: post.length,
//     status: "success",
//     data: post,
//   });
// });

// /*********************** get one post *********************** */
// exports.getPost = catchAsync(async (req, res, next) => {
//   console.log(req.params);
//   const post = await Post.findById({ _id: req.params.id });
//   if (!post) {
//     return next(new AppErorr("There is not post in this ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: post,
//   });
// });

// /*********************** update post *********************** */

// exports.updatePost = catchAsync(async (req, res, next) => {
//   const post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//     runValidators: true,
//   });
//   if (!post) {
//     return next(new AppErorr("There is not post in this ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: post,
//   });
// });

// /*********************** delete post *********************** */
// exports.deletePost = catchAsync(async (req, res, next) => {
//   const post = await Post.findById({ _id: req.params.id });

//   if (!(req.user.id == post.user)) {
//     return next(new AppErorr("this is not your post", 404));
//   }

//   const postDelete = await Post.findByIdAndDelete({ _id: req.params.id });
//   if (!post) {
//     return next(new AppErorr("There is not post in this ID", 404));
//   }

//   const comment = await Comment.deleteMany({ post: req.params.id });

//   if (post.images) {
//     const path = post.images;

//     try {
//       path.map((p) => fs.unlinkSync(`../public/assets/img/post/${p}`));

//       //file removed
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   if (post.video) {
//     const path = post.vedio;

//     try {
//       fs.unlinkSync(`../public/assets/video/${path}`);

//       //file removed
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   if (post.audio) {
//     const path = post.audio;

//     try {
//       fs.unlinkSync(`../public/assets/audio/${path}`);

//       //file removed
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   res.status(200).json({
//     status: "success",
//     data: post,
//   });
// });
