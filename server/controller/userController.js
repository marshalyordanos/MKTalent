const User = require("../model/userModel/usersModel");
const catchAsync = require("../utils/catchAsync");

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

  res.status(200).json({
    status: "success",
    data: user,
  });
});
