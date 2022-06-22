const Profile = require("../model/profileModel");
const User = require("../model/userModel/usersModel");
const AppErorr = require("../utils/appError");
const jsonwebtoken = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");

const createSentToken = (user, statusCode, res) => {
  const token = getToken(user._id);

  res.status(statusCode).json({
    status: "succes",
    token: token,
    data: user,
  });
};
const getToken = (id) => {
  return jsonwebtoken.sign({ id: id }, process.env.JWT_SECRETE, {
    expiresIn: "30d",
  });
};
exports.getAllUser = catchAsync(async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    status: "success",
    data: user,
  });
});
exports.getUser = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const user = await User.findById({ _id: req.params.id }).select("-password");
  if (!user) {
    return next(new AppErorr("There is not user in this ID", 404));
  }
  res.status(200).json({
    status: "successasDas",
    data: user,
  });
});

const filterObj = (obj, ...allowedFields) => {
  console.log("---------------------------", allowedFields);
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);

  //1)create err if user posts password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppErorr(
        "this route is not for password update. please use /updateMypassword",
        400
      )
    );
  }

  //2) update user docuent

  const filteredBody = filterObj(req.body, "username", "email");

  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  const p = await Profile.findOne({ user: req.user.id });
  const pro = await Profile.findByIdAndUpdate(
    p._id,
    { username: user.username },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) get user form collection

  const user = await User.findById(req.user.id).select("+password");

  // console.log("iiiiiiiiiiiii",req.body)
  // 2) check if posted current password is correct

  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppErorr("Wrong password"), 401);
  }
  //3) if so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  //4) Log user in , set JWT
  createSentToken(user, 200, res);
});
