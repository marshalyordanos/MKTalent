const AppErorr = require("../utils/appError")

exports.errHandling = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status || "error"
    console.log("***************************************************",err.isOprational)
    // let error={...err}
    if(err.name==="CastError") err= new AppErorr(`Invalide ${err.path}: ${err.value._id}`,400)
    
    if(err.code===11000) err= new AppErorr(`Duplicate filed value: please use another  ${Object.keys(err.keyValue)[0]}`,400)
   
    if(err.name==="ValidationError"){
      const e = Object.values(err.errors).map(el=>el.message)
        err= new AppErorr(`Invalide input data. ${e.join('. ')}`,400)
    }

    if(err.isOprational){
        res.status(err.statusCode).json({
            status:err.status,
            message:err.message,
            error:err
        })
    }else{
        console.log('Error🔥',err)
        res.status(500).json({
            status:'error',
            message:"Something is very wrong",
            error:err
        })
    }
}