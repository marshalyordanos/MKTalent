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
  
  
  router.route("/createpost").post(protect, uploadUserPhoto, createPost)
  router.route("/deletepost").delete(protect, deletePost);
  router.route("/getallpost").get(getAllPost);
router.route("/:id").get(getPost)
router.route("/updatepost").patch(updatePost)
  // blog category route
  router.route("/createcategory").post(protect, createCategory)
  router.route("/getcategory").get(getCategory)
  
  
  
  module.exports = router;
  