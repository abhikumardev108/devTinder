const mongoose = require('mongoose');


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
    },
    password : {
        type : String,
        required : true,
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
