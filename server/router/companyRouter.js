const express = require ("express")
const { protect } = require("../controller/authController");
const {
    createCompany, getAllCompany, deleteCompany, getCompany, updateCompany,
 

  } = require("../controller/CompanyController");

  const router = express.Router();
  
  router.route("/createCompany").post(protect, createCompany)
  router.route("/deleteCompany").delete(protect, deleteCompany);
  router.route("/getallCompany").get(getAllCompany);
router.route("/:id").get(getCompany)
router.route("/updatepCompany").patch(updateCompany)
  
  
  
  
  module.exports = router;
  