const express = require('express');
const app = express();


const {adminAuth, userAuth} = require("./middlewares/auth");


app.use("/admin", adminAuth);


app.get("/admin/getAllData", (req, res) => {
    res.send("Get all the data for the user.");
});


app.get("/admin/deleteData", (req, res) => {
    res.send("Deleted all data.");
});


app.get("/user/data", userAuth, (req, res) => {
    res.send("user data sent.")
});





app.listen(7000, () => {
    console.log("Server successfully running on the port_no 7000.");
});