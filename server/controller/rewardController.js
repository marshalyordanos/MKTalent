/********************************* import modules ************************************** */
const Reward = require("../model/rewardModel");
const multer = require("multer");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const APIFeature = require("../utils/apiFeature");
/**************** multer storage ************************* */
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, "../public/assets/img/reward");
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
exports.uploadUserPhoto = upload.fields([{ name: "image", maxCount: 1 }]);

/********************* create post  */

exports.createReward = catchAsync(async (req, res, next) => {
  console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
  req.body.user = req.user.id;
  console.log(req.files.image, req.body);
  if (req.files.image) {
    req.body.image = req.files.image[0].filename;
  }

  const post = await Reward.create(req.body);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.getProfile = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const post = await Reward.findOne({ _id: req.params.id });
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
exports.getAllReward = catchAsync(async (req, res, next) => {
  const featur = new APIFeature(Reward.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paging();
  const post = await featur.query.populate("user");
  console.log(post);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.filterProfile = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const post = await Reward.findOne({ user: req.params.id })
    .populate("jobs")
    .populate({ path: "jops.user", model: "User" });
  console.log(post);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

exports.getAllProfileById = catchAsync(async (req, res, next) => {
  const users = await Reward.find({ _id: { $ne: req.params.id } }).populate(
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

  const profile = await Reward.findByIdAndUpdate(
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
  const xxx = await Reward.find({ _id: req.params.id });
  console.log("8888888888888880,", xxx, req.params.id);
  const post = await Reward.findByIdAndUpdate(
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
