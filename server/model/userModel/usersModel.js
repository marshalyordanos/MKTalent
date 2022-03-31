const mongoose  = require('mongoose');
const Validator = require('validator');
const bcrypt = require('bcryptjs')
// const crypto = require('crypto')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please tell us your username!'],
        unique:true
    },
    email:{
        type:String,
        required:[true, 'Please provide your email'],
        unique:true,
        lowercase:true,
        Validate:[Validator.isEmail,'Please provide a valid email.']
    }, 
    role:{
        type:String,
        required:[true, 'Please provide your role'],
        enum: {
            values:['music','model','poet','other'],
            message:"difficulty is either: easy, medium, hard"
        }
    },
    gender:{
        type:String,
        required:['true','A tour must have a difficulty'],
        enum: {
            values:['male','female'],
            message:"difficulty is either: easy, medium, hard"
        }
    },
    password:{
        type:String,
        required:[true, 'Please provide your password'],
        selecte:false,

    },
    passwordConfirm:{
        type:String,
        required:[true, 'Please confirm your password '],
        validate:{validator:function(val){
            return val== this.password
        },
        message:"The passwor is not match!"
     }
    },
    passwordChangeAt:Date,
    passwordResetToken:String,
    passwordResetExprires:Date


},{
    timestamps:true
})

userSchema.pre('save', async function(next){
    if(!(this.isModified('password'))) return next()

    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm = undefined;
    next();
})


userSchema.methods.correctPassword = async function(password1,password2){
    return await bcrypt.compare(password1,password2)
}


// userSchema.methods.changePasswordAfter = function(JWTTimeStamp){
//     if(this.passwordChangeAt){
//         const changedTimeStamp = parseInt(
//             this.passwordChangeAt.getTime()/1000,10
//         )
//         return JWTTimeStamp <changedTimeStamp;
//     }
//     return false;
// }

// userSchema.methods.createPasswordResetToken=function(){
//    const restToken = crypto.randomBytes(32).toString('hex');

//    this.passwordResetToken =crypto.createHash('sha256').update(restToken).digest('hex');
//    console.log({restToken},this.passwordResetToken)
//    this.passwordResetExprires = Date.now()+10*60*1000;
//    return this.passwordResetToken;
// }
const User = mongoose.model('User',userSchema);


module.exports = User;