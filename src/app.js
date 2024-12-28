const express = require("express");
const {connectDB} = require("./config/database");   // import from database.
const app = express();
const User = require("./models/user");
const {validateSignUpData} = require("./utils/validation");
const bcrypt = require("bcrypt");
const validator = require("validator");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const {userAuth} = require("./middlewares/auth");
const user = require("./models/user");




app.use(express.json());   // converting JSON into js object, so that communication will happens.
app.use(cookieParser());  // helps us to read cookies.


// creating the post dynamic API.
app.post("/signup" , async (req, res) => {

    try {
        // validation of data.
        validateSignUpData(req);

        const {firstName, lastName, emailId, password} = req.body;

        // Encryption of the password.
        const passwordHash = await bcrypt.hash(password, 10);
        console.log(passwordHash);

        // creating a new instance of the user model.
        const user = new User({   // best way to access the db element explicitly.
            firstName,
            lastName,
            emailId,
            password : passwordHash,
        });

        await user.save();
        res.send("User added successfully.");
    } catch(err) {
        res.status(400).send("Error : " + err.message);
    }
});


app.post("/login", async (req, res) => {
    try {
        const {emailId, password} = req.body;

        if(!validator.isEmail(emailId)) {
            throw new Error("EmailId is not valid.!");
        }

        const user = await User.findOne({emailId : emailId});
        if(!user) {
            throw new Error("Invalid credentials.!");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid) {
            // create a JWT token.
            const token = await jwt.sign({_id : user._id}, "DEV@TINDER500", {expiresIn : "1d"});
            console.log(token);

            // Add the token to the cookies and sends a response to the user.
            res.cookie("token", token, {expires: new Date(Date.now() + 8 * 3600000)});     
            res.send("login successful.!!");
        } else {
            throw new Error("Invalid credentials.!");
        }

    } catch(err) {
        res.status(400).send("Error : " + err.message);
    }
});


app.get("/profile", userAuth, async (req, res) => {

    try {

        const user = req.user;
        res.send(user);
    } catch(err) {
        res.status(400).send("Error : " + err.message);
    }

});



// "/sendConnectionRequest" API.
app.post("/sendConnectionRequest", userAuth, async (req, res) => {
    const user = req.user;
    // sending a connection request.
    console.log("Sending a connection request.!");

    res.send(user.firstName + " " + "sent the connection request.!");
});



// get "/user" by emailId
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;

    
    try {
        console.log(userEmail);
        const user = await User.find({emailId : userEmail});
        
        if(user.length === 0) {
            res.status(402).send("user not found.");
        } else {
            res.send(user);
        }

    } catch(err) {
        res.status(400).send("Something went wrong.");
    }


});



// Feed API - GET "/feed" - get all the users form the database.

app.get("/feed", async (req, res) => {
        
    try {
        const user = await User.find({});
        res.send(user);
    } catch(err) {
        res.status(402).send("Something went wrong.!");
    }


});


// GET "/id" - get users form the database using _id.

app.get("/id", async (req, res) => {
    const userId = req.body._id;

    try {
        // console.log("id : " + userId);
        const user = await User.find({_id : userId});
        res.send(user);
    } catch(err) {
        res.status(402).send("Id not found.!");
    }
});



 
// delete API -> Delete a data from the database.
app.delete("/user", async (req,res) => { 
    const userId = req.body._id;

    try {
        // const user = await User.findByIdAndDelete({_id : userId});
        const user = await User.findByIdAndDelete(userId);
        res.send("user deleted successfully.!");

    } catch(err) {
        res.status(404).send("user not found.!");
    }
});


// update data of the user.
app.patch("/user/:userId", async (req, res) => {

    // const userId = req.body._id;
    const userId = req.params?.userId;
    const data = req.body;



    try {

        const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills",];
        const isUpdateAllowed = Object.keys(data).every((k) =>
            ALLOWED_UPDATES.includes(k)
        );

        if(!isUpdateAllowed) {
            throw new Error("Updates not allowed.!");
        }

        if(data?.skills.length > 10) {
            throw new Error("Skills cannot be more than 10.");
        }

        // const user = await User.findByIdAndUpdate({_id : userId}, data);
        const user = await User.findByIdAndUpdate({_id : userId}, data, {
            returnDocument : "after", 
            runValidators : true,
        });

        console.log(user);
        res.send("user upadated successfully.");

    } catch(err) {
        res.status(404).send("Update failed." + err.message);
    }

});





connectDB().then(() => {
    console.log("Database connected successfully.");

    // 1st db coonection done, then after connect to the server.
    app.listen(5000, () => {
        console.log("Server successfully running on the port_no 5000...");
    });
    
}).catch(err => {
    console.log("Database can't be connected.");
});

