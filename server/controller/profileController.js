/********************************* import modules ************************************** */
const Profile = require("../model/profileModel");
const multer = require("multer");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const APIFeature = require("../utils/apiFeature");
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
  req.body.user = req.user.id;
  console.log(req.files.coverImage, req.body);
  console.log("lllllllllllll", req.files.profileImage, req.body);
  if (req.files.coverImage) {
    req.body.coverImage = req.files.coverImage[0].filename;
  }
  if (req.files.profileImage) {
    req.body.profileImage = req.files.profileImage[0].filename;
  }
  const post = await Profile.create(req.body);

  res.status(200).json({
    status: "success",
    data: post,
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

/*********************** get one post *********************** */
exports.getProfile = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const post = await Profile.findOne({ _id: req.params.id }).populate(
    "rewards"
  );
  console.log(post);
  if (!post) {
    return next(new AppErorr("There is not post in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: post,
  });
});

/*********************** get one post *********************** */
exports.getAllProfile = catchAsync(async (req, res, next) => {
  const featur = new APIFeature(Profile.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paging();
  const post = await featur.query.populate("user").populate("rewards");
  console.log(post);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.filterProfile = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const post = await Profile.findOne({ user: req.params.id })
    .populate("jobs")
    .populate({ path: "jops.user", model: "User" });
  console.log(post);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.getAllProfileById = catchAsync(async (req, res, next) => {
  const users = await Profile.find({ _id: { $ne: req.params.id } }).populate(
    "user"
  );
  return res.json(users);
});

/*********************** update post *********************** */

exports.updatePoint = catchAsync(async (req, res, next) => {
  // console.log("ooooooooooooo", req.files.coverImage, req.body);
  //job apply --------- 1
  // get get ---------- 0.01
  // comment ----------- 0.1
  // post -------------- 0.0001
  // jop aprove --------------- 5

  const profile = await Profile.findByIdAndUpdate(
    { _id: req.params.id },
    { point: req.point },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!profile) {
    return next(new AppErorr("There is not post in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: profile,
  });
});

exports.updateProfile = catchAsync(async (req, res, next) => {
  // console.log("ooooooooooooo", req.files.coverImage, req.body);
  if (req?.files?.coverImage) {
    req.body.coverImage = req.files.coverImage[0].filename;
  }
  if (req?.files?.profileImage) {
    req.body.profileImage = req.files.profileImage[0].filename;
  }
  const xxx = await Profile.find({ _id: req.params.id });
  console.log("8888888888888880,", xxx, req.params.id);
  const post = await Profile.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!post) {
    return next(new AppErorr("There is not post in this ID", 404));
  }
  console.log("pppppppppppppppppppppppppppppppppp", post);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

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
