const Chat = require("../model/chatModel");
const Job = require("../model/jobPostModel");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createChat = catchAsync(async (req, res, next) => {
  const { to, message } = req.body;
  const from = req.user.id;
  const data = await Chat.create({
    message: message,
    users: [from, to],
    sender: from,
  });
  res.status(200).json({
    status: "success",
    chat: data,
  });
});

// exports.updateJob = catchAsync(async (req, res, next) => {
//   const job = await Job.findByIdAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//     runValidators: true,
//   });
//   if (!job) {
//     return next(new AppErorr("There is no job with this ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: job,
//   });
// });

//DELETE JOB
// exports.deleteJob = catchAsync(async (req, res, next) => {
//   const job = await Job.findById({ _id: req.params.id });

//   if (!(req.user.id == job.user)) {
//     return next(new AppErorr("this is not your job post", 404));
//   }

//   const jobDelete = await Job.findByIdAndDelete({ _id: req.params.id });
//   if (!job) {
//     return next(new AppErorr("There is no job with this ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: jobDelete,
//   });
// });

//GET JOB
// exports.getJob = catchAsync(async (req, res, next) => {
//   console.log(req.params);
//   const job = await Job.findById({ _id: req.params.id });
//   if (!job) {
//     return next(new AppErorr("There is no job with this ID", 404));
//   }

//   res.status(200).json({
//     status: "success",
//     data: job,
//   });
// });

//GET ALL JOB
exports.getAllChats = catchAsync(async (req, res, next) => {
  const { to } = req.body;
  const from = req.user.id;
  // const messages = await Chat.find({
  //   users: {
  //     $all: [from, to],
  //   },
  // }).sort({ updatedAt: 1 });
  // const projectedMessages = messages.map((msg) => {
  //   return {
  //     fromSelf: msg.sender.toString() === from,
  //     message: msg.message,
  //   };
  // });
  // res.json(projectedMessages);
  let query = Chat.find();
  query = query.sort("createdAt");
  const chats = await query;
  const filterChats = chats.filter(
    (x, i) =>
      (x.users[0] == from && x.users[1] == to) ||
      (x.users[0] == to && x.users[1] == from)
  );

  res.json({
    allChats: chats,
    len: chats.length,
    chats: filterChats,
    lens: filterChats.length,
  });
});
// exports.getAllChatsById = catchAsync(async (req, res, next) => {
//   let query = Chat.find({
//     sender: req.params.id,
//   });

//   query = query.sort("-createdAt");
//   const allChats = await query;

//   res.status(200).json({
//     status: "success",
//     chat: allChats,
//   });
// });
exports.getChatUser = catchAsync(async (req, res, next) => {
  let query = Chat.find({
    sender: req.user.id,
  });

  query = query.sort("-createdAt");
  const allChats = await query;
  console.log("::::::::::::::::::::");
  let x = allChats.map((v) => v.reciver);
  // let x = [1, 2, 3, 1, 2, 2];
  const y = [...new Set(x)];
  res.status(200).json({
    status: "success",
    chat: y,
    x: x,
  });
});
