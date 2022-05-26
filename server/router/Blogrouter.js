const express = require ("express")
const { protect } = require("../controller/authController");
const {
    getAllPost,
    createPost,
    getPost,
    deletePost,
    updatePost,
    uploadUserPhoto,

  } = require("../controller/blogPostController");
  const{
createCategory,
getCategory
  } =require('../controller/blogCategoryController')
  
  const router = express.Router();
  // blog post routes
  // uploadUserPhoto,
  router.route("/createpost").post(protect,uploadUserPhoto, createPost)

  router.route("/getallpost").get(getAllPost);
  router.route("/getpost/:id").get(getPost)
  router.route("/updatepost/:id").patch(updatePost)
  router.route("/deletepost/:id").delete(protect, deletePost);
  
  // blog category route
  router.route("/createcategory").post(protect, createCategory)
  router.route("/getcategory").get(getCategory)
  
  
  
  module.exports = router;
  