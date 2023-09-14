const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    mobno : {
        type:Number,
        required:true,
    },
    password : {
        type:String,
        required:true,
    },
    cnfpassword : {
        type:String,
        required:true,
    },
    dob : {
        type:Date,
        required:true,
    },
    city : {
        type:String,
        required:true,
    }
})

const Register = new mongoose.model("Register",registerSchema);
module.exports= Register;