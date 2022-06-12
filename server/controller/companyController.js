
const Company = require("../companymodel");
const catchAsync = require("../utils/catchAsync");



exports.createCompany = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
    const newCompany = await Company.create(req.body);
    res.status(200).json({
      success: "success",
      data: newCompany
    });
  });

  exports.updateCompany = catchAsync(async (req, res) => {
    const Company = await Company.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!Company) {
      return next(new AppErorr("There is no Company with this ID", 404));
    }
  
    res.status(200).json({
      status: "success",
      data: Company,
    });
  });
  
  //DELETE Company
  exports.deleteCompany = catchAsync(async (req, res) => {
    const Company = await Company.findById({ _id: req.params.id });
  
    if (!(req.user.id == Company.user)) {
      return next(new AppErorr("this is not your Company post", 404));
    }
  
    const CompanyDelete = await Company.findByIdAndDelete({ _id: req.params.id });
    if (!Company) {
      return next(new AppErorr("There is no Company with this ID", 404));
    }
    
    res.status(200).json({
      status: "success",
      data: CompanyDelete,
    });
  });
  
  //GET Company
  exports.getCompany = catchAsync( async (req, res) => {
    console.log(req.params);
    const Company = await Company.findById({ _id: req.params.id });
    if (!Company) {
      return next(new AppErorr("There is no Company with this ID", 404));
    }
  
    res.status(200).json({
      status: "success",
      data: Company,
    });
  });
  
  //GET ALL Company
  exports.getAllCompany = catchAsync(async (req, res) => {
    let query = Company.find();
    console.log(req.query);
    const page = req.query.page * 1 || 1;
    const limit = +req.query.limit || 9;
  
    const skip = (page - 1) * limit;
    query.skip(skip).limit(limit);
    query.sort("-createdAt");
    const Company = await query.populate("user");
  
    res.status(200).json({
      length: Company.length,
      status: "success",
      data: Company,
    });
  });
  