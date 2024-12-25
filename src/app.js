const express = require("express");
const {connectDB} = require("./config/database");   // import from database.
const app = express();
const User = require("./models/user");
const user = require("./models/user");



app.use(express.json());   // converting JSON into js object, so that communication will happens.
 

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

