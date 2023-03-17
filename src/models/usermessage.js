const mongoose = require("mongoose");
const validator = require("validator");
const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Email is not Valid")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minlength:10
    },
    message:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// need to create a collection 

const usercont = mongoose.model("Usermessage",userschema);
module.exports = usercont; 