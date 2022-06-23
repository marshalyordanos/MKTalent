const Event = require("../model/EventModel");
const APIFeature = require("../utils/apiFeature");
const AppErorr = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createEvent = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  const newEvent = await Event.create(req.body);
  res.status(200).json({
    success: "success",
    data: newEvent,
  });
});

exports.updateEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!event) {
    return next(new AppErorr("There is no Event with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: event,
  });
});

//DELETE Event
exports.deleteEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById({ _id: req.params.id });

  if (!(req.user.id == event.user)) {
    return next(new AppErorr("this is not your Event post", 404));
  }

  const eventDelete = await Event.findByIdAndDelete({ _id: req.params.id });
  if (!event) {
    return next(new AppErorr("There is no Event with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: eventDelete,
  });
});

//GET Event
exports.getEvent = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const event = await Event.findById({ _id: req.params.id }).populate(
    "appliedUser"
  );
  if (!event) {
    return next(new AppErorr("There is no Event with this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: event,
  });
});

//GET ALL Eventw
exports.getAllEvent = catchAsync(async (req, res) => {
  const featur = new APIFeature(Event.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paging();
  const event = await featur.query;

  res.status(200).json({
    length: Event.length,
    status: "success",
    data: event,
  });
});
