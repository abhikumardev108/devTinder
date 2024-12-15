const express = require('express');
const app = express();



// in a route  --> there can be multiple routing.
app.use("/user", (req, res, next) => {
    console.log("Handling the route user.");     
    // res.send("Response.!!!");
    next();
    res.send("Response.!!!");

}, (req, res) => {
    console.log("Handling the route user 2."); 
    res.send("2nd Response.!!!");
});







// listening the request from the user.
app.listen(7000, () => {
    console.log("Server successfully running on port_no 7000.");
});