const express = require("express");
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const blogRouter = require("./router/Blogrouter");
const profileRouter = require("./router/profileRouter");
const rewardRouter = require("./router/rewardRouter");

const JobRouter = require("./router/jobRouter");
const ChatRouter = require("./router/chatRouter");
const EventRouter= require('./router/eventRouter')
const AppErorr = require("./utils/appError");
const Cors = require("cors");
const { errHandling } = require("./controller/errorController");

const app = express();
app.use(express.json());
app.use(Cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/blogposts", blogRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/reward", rewardRouter);

app.use("/api/v1/job", JobRouter);
app.use("/api/v1/event", EventRouter);
app.use("/api/v1", ChatRouter);

// app.use('/api/v1/comments',commentRouter)

app.all("*", (req, res, next) => {
  // const err = new Error("ther os a errrasd")
  // err.statusCode=404
  // err.status="fial"
  return next(new AppErorr("Page is not found", 404));
});

app.use(errHandling);

module.exports = app;
