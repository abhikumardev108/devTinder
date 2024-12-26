const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 4,
        maxlength : 20,
    },
    lastName : {
        type : String,
    },
    emailId : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        trim : true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid emailId" + value);
            }
        }

    },
    password : {
        type : String,
        required : true,
        validate(value) {
            if(!validator.isStrongPassword(value)) {
                throw new Error("Please Enter strong password.!" + value);
            }
        }
    },
    age : {
        type : Number,
        min : 18,
    },
    phone : {
        type : Number,
    },
    gender : {
        type : String,
        validate(value) {    // By default function will only run when a new document is created. means when user login for the first time.  
            if(!['male', 'female', 'others'].includes(value)) {
                throw new Error("Gender data is not valid.");
            }
        }
    },
    photoUrl : {
        type : String,
        default : "https://www.shutterstock.com/image-vector/shree-ram-navmi-marathi-hindi-calligraphy-2279931679",

        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error("Invalid photo URL" +value);
            }
        }
    },
    about : {
        type : String,
        default : "This is the default discription about the user.",
    },
    skills : {
        type : [String],
    },

}, {timestamps : true});



module.exports =  mongoose.model("User", userSchema);
