const Job = require("../model/jobPostModel");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createJob = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  const newJob = await Job.create(req.body);
  res.status(200).json({
    success: "success",
    data: newJob,
  });
});

exports.updateJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!job) {
    return next(new AppErorr("There is no job with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: job,
  });
});

//DELETE JOB
exports.deleteJob = catchAsync(async (req, res, next) => {
  const job = await Job.findById({ _id: req.params.id });

  if (!(req.user.id == job.user)) {
    return next(new AppErorr("this is not your job post", 404));
  }

  const jobDelete = await Job.findByIdAndDelete({ _id: req.params.id });
  if (!job) {
    return next(new AppErorr("There is no job with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: jobDelete,
  });
});

//GET JOB
exports.getJob = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const job = await Job.findById({ _id: req.params.id });
  if (!job) {
    return next(new AppErorr("There is no job with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: job,
  });
});

//GET ALL JOB
exports.getAllJob = catchAsync(async (req, res) => {
  let query = Job.find();
  console.log(req.query);
  const page = req.query.page * 1 || 1;
  const limit = +req.query.limit || 9;

  const skip = (page - 1) * limit;
  query.skip(skip).limit(limit);
  query.sort("-createdAt");
  const job = await query.populate("user");

  res.status(200).json({
    length: job.length,
    status: "success",
    data: job,
  });
});
