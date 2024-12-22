const express = require("express");

const {connectDB} = require("./config/database"); // import from database.

const app = express();

const User = require("./models/user");




// creating the post api

app.post("/signup" ,  async (req, res) => {
    // logic
    // creating a new instance of the user model.
    const user = new User({
        firstName : "Golu",
        lastName : "Kumar",
        emailId : "golukumar@gmail.com",
        password : "golu@12345"
    });


    try {
        await user.save();
        res.send("User added successfully.");
    } catch(err) {
        res.status(400).send("Error saving the user : " + err.message);
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

