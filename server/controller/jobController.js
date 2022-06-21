const Job = require("../model/jobPostModel");
const APIFeature = require("../utils/apiFeature");
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
  const job = await Job.findById({ _id: req.params.id }).populate(
    "appliedUser"
  );
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
  const featur = new APIFeature(Job.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paging();
  const job = await featur.query;

  res.status(200).json({
    length: job.length,
    status: "success",
    data: job,
  });
});
