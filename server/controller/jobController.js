
const Job = require("../model/jobPostModel");
const catchAsync = require("../utils/catchAsync");



exports.createJob = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
    const newJob = await Job.create(req.body);
    res.status(200).json({
      success: "success",
      data: newJob
    });
  });