
const Post = require("../model/blogPostModel");
const catchAsync = require("../utils/catchAsync");


const multer = require("multer");

//Blog multer storage
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, "../public/assets/img/blogpost");
    }
  },
  filename: (req, file, cb) => {
    console.log(file)
    const ext = file.mimetype.split("/")[1];
    console.log(file)
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
    console.log(file)
  },
});
//blog multer filter
const multerFilter = (req, file, cb) => {

  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  }  else {
    cb(new AppErorr("Please Enter Valid file type", 400));
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
}); 
exports.uploadUserPhoto = upload.fields(
  
[{  name:'photo', maxCount:1}]);

//CREATE POST
exports.createPost=catchAsync(async (req, res) => {
  req.body.user = req.user.id;
  console.log('dawdawdawd')
  console.log(req.files, req.body);
  if (req.files.photo) {
    req.body.photo = [];
    req.files.photo.map((file) => req.body.photo.push(file.filename));
  }
  console.log('abcde')
  const post = await Post.create(req.body);

  res.status(200).json({
    status: "success",
    data: post,
  });
});

//UPDATE POST
exports.updatePost = catchAsync(async (req, res) => {
  const post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!post) {
    return next(new AppErorr("There is no post in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: post,
  });
});

//DELETE POST
exports.deletePost = catchAsync(async (req, res) => {
  const post = await Post.findById({ _id: req.params.id });

  if (!(req.user.id == post.user)) {
    return next(new AppErorr("this is not your post", 404));
  }

  const postDelete = await Post.findByIdAndDelete({ _id: req.params.id });
  if (!post) {
    return next(new AppErorr("There is not post in this ID", 404));
  }

 

  if (post.photo) {
    const path = post.photo;

    try {
      path.map((p) => fs.unlinkSync(`../public/assets/img/post/${p}`));

      //file removed
    } catch (err) {
      console.error(err);
    }
  }
  
  res.status(200).json({
    status: "success",
    data: post,
  });
});

//GET POST
exports.getPost = catchAsync( async (req, res) => {
  console.log(req.params);
  const post = await Post.findById({ _id: req.params.id }).populate('user');
  if (!post) {
    return next(new AppErorr("There is not post in this ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: post,
 
  });
});

//GET ALL POSTS
exports.getAllPost = catchAsync(async (req, res) => {
  let query = Post.find();
  console.log(req.query);
  const page = req.query.page * 1 || 1;
  const limit = +req.query.limit || 9;

  const skip = (page - 1) * limit;
  query.skip(skip).limit(limit);
  query.sort("-createdAt");
  const post = await query.populate("user");

  res.status(200).json({
    length: post.length,
    status: "success",
    data: post,
  });
});



