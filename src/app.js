const express = require('express')
const app = express();


// error handling.


app.get("/getUserData", (req, res) => {
    try {
        throw new Error("sdfghjkl");
        res.send("Get all the user data from the database.");
    } catch(err) {
        res.status(500).send("Something went wrong.!");
    }
});


app.use("/", (err, req, res, next) => {
    if(err) {
        res.status(500).send("Error occured.!");
    } 
});







app.listen(7000, () => {
    console.log("Server successfully running on the port_no 7000.");
});