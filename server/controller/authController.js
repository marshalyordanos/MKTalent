const User = require("../model/userModel/usersModel");
const jwt = require("jsonwebtoken");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");

const getToken = (id) => {
  //check your code aeound here you may have forgotten id:id and said only id
  return jwt.sign({ id: id }, process.env.JWT_SECRETE, {
    expiresIn: "30d",
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = getToken(newUser._id);

  res.status(200).json({
    success: "success",
    token: token,
    data: newUser,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // check the email and the password is exist
  if (!email || !password) {
    return next(new AppErorr("email and password must be provided!", 401));
  }

  // check if user is exist and oasword is coreact
  const user = await User.findOne({ email: email }).select("+password");
  // const correct = await user.correctPassword(password,user.password)
  //   console.log(user);

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppErorr("Incorrect email or password", 401));
  }

  console.log(user);
  //get the token
  const token = getToken(user._id);

  res.status(200).json({
    status: "succes",
    token: token,
    data: {
      role: user.role,
      _id: user._id,
      username: user.username,
      gender: user.gender,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  //check if there is a token
  let token;
  if (
    req.headers.authorization ||
    req.headers.authorization?.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppErorr("yor are not logged in", 401));
  }
  // varification token
  console.log(token);
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRETE);

  // check if the user still exixst
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(new AppErorr("the user is does not exist", 401));
  }

  // check if the user change password after the token wa issued

  if (freshUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppErorr("user recently chaged password! please log in again.", 401)
    );
  }

  req.user = freshUser;
  next();
});

exports.restricTo = (...roles) => {
  return (req, res, next) => {
    //roles ['admin','user']
    if (!roles.includes(req.user.role)) {
      return next(
        new AppErorr("You do not have permission to perform this Action", 403)
      );
    }

    next();
  };
};
