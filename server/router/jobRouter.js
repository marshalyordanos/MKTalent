const express = require ("express")
const { protect } = require("../controller/authController");
const {
    createJob,
 

  } = require("../controller/jobController");

  const router = express.Router();
  
  router.route("/createjob").post(protect, createJob)

  
  
  
  
  module.exports = router;
  