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


// This will be put into the last of the application. so that if something went wrong, it will caught by that at the very last.
app.use("/", (err, req, res, next) => {  // here, err -> this argument will be in the first place.
    if(err) {
        res.status(500).send("Error occured.!");
    } 
});







app.listen(7000, () => {
    console.log("Server successfully running on the port_no 7000.");
});