
const User = require('../model/userModel/usersModel')
const jwt = require('jsonwebtoken')
const AppErorr = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
 
const getToken =(id)=>{
    //check your code aeound here you may have forgotten id:id and said only id
    return jwt.sign({id:id},process.env.JWT_SECRETE,{
        expiresIn:"30d"
    })
}

exports.signup = catchAsync(async(req,res,next)=>{
    const newUser = await User.create(req.body)

    const token = getToken(newUser._id)

    res.status(200).json({
        success:"success",
        token:token,
        data:newUser
    })
})




exports.login  = catchAsync(async(req,res,next)=>{
    const {email,password} = req.body
    // check the email and the password is exist
    if(!email || !password){
        return next(new AppErorr("email and password must be provided!",401));
    }

    // check if user is exist and oasword is coreact
    const user =await  User.findOne({email:email}).select('+password')
    // const correct = await user.correctPassword(password,user.password)
    console.log(user) 
    if(!user||!(await user.correctPassword(password,user.password))){
        
        return next(new AppErorr("Incorrect email or password",401));
    }


    //get the token
    const token = getToken(user._id);

    res.status(200).json({
        status:"succes",
        token:token,
        data:user
    })
     
})

