const express = require("express");
const {connectDB} = require("./config/database");   // import from database.
const app = express();
const User = require("./models/user");
const user = require("./models/user");



app.use(express.json()); 


// creating the post dynamic API.

app.post("/signup" , async (req, res) => {
    // creating a new instance of the user model.
    const user = new User(req.body);
    try {
        await user.save();
        res.send("User added successfully.");
    } catch(err) {
        res.status(400).send("Error saving the user : " + err.message);
    }
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



connectDB().then(() => {
    console.log("Database connected successfully.");

    // 1st db coonection done, then after connect to the server.
    app.listen(5000, () => {
        console.log("Server successfully running on the port_no 5000...");
    });
    
}).catch(err => {
    console.log("Database can't be connected.");
});

