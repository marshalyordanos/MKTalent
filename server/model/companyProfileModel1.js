const mongoose = require("mongoose");
const Validator = require("validator");
const bcrypt = require("bcryptjs");
// const crypto = require('crypto')
const companySchema = new mongoose.Schema(
  {
    coverImage: String,
    profileImage: String,
    companyname: {
      type: String,
      required: [true, "Please tell us your companyname"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [Validator.isEmail, "Please provide a valid email"],
    },
    areaOfSpecialization: {
      type: String,
      required: true,
    },

    companyAddress: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: ["true", "Please input gender"],
      enum: {
        values: ["male", "female"],
        message: "input either: male or female",
      },
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password "],
      validate: {
        validator: function (val) {
          return val == this.password;
        },
        message: "The passwor is not match!",
      },
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExprires: Date,
  },
  {
    timestamps: true,
  }
);

companySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.passwordConfirm = undefined;
  next();
});
companySchema.pre(/^find/, async function (next) {});

companySchema.methods.correctPassword = async function (password1, password2) {
  return await bcrypt.compare(password1, password2);
};

companySchema.methods.changePasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangeAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );
    return JWTTimeStamp < changedTimeStamp;
  }
  return false;
};

// userSchema.methods.createPasswordResetToken=function(){
//    const restToken = crypto.randomBytes(32).toString('hex');

//    this.passwordResetToken =crypto.createHash('sha256').update(restToken).digest('hex');
//    console.log({restToken},this.passwordResetToken)
//    this.passwordResetExprires = Date.now()+10*60*1000;
//    return this.passwordResetToken;
// }
const Company = mongoose.model("Company", companySchema);

module.exports = Company;
