
// from video no. 17 --> Routing and request handlers


const express = require('express');
const app = express();




// Advance routing concepts.
app.get("/ab?c", (req,res) => {  // here 'b' becomes optional.
    res.send("1. Advance routing concepts!.");
});

app.get("/a(bc)?d", (req,res) => {    // here 'ab' becomes optional.
    res.send("2. Advance routing concepts!.");
});

app.get("/ab+c", (req,res) => {     // here 'b' can be repetitive.
    res.send("3. Advance routing concepts!");
});

app.get("/ab*cd", (req,res) => {    // here after ab we can insert anything and before cd.
    res.send("4. Advance routing concepts!");
});





// How to read query parameter.
app.get("/user", (req,res) => {
    console.log(req.query);
    res.send("Reading query parameter.!");
});




// How to read dynamic parameter.
app.get("/user/:userId/:name/:password" , (req,res) => {   // : --> means dynamic routing.
    console.log(req.params);
    res.send("Reading dynamic parameter.!");
});





// regex type routing.
app.get(/a/, (req,res) => {
    res.send("1. Regex routing concepts!");
});

app.get(/.*fly$/, (req,res) => {
    res.send("Advance routing concepts!");
});





// this will only handle '/user' api call , not all of these API methods call.
app.get("/user", (req, res) => {
    res.send({firstname: "Abhishek", lastname: "Kumar"});
});


app.post("/user", (req, res) => {
    console.log("Save data to the database.");
    res.send("Data saved successfully to the database.");
});


app.delete("/user", (req, res) => {
    res.send("Data deleted successfully.!");
});








// this will match all the HTTP methods API to call the /test
app.use("/test", (req, res) => {
    res.send("It handles only the incoming test request.!");
});

app.use("/hello", (req, res) => {
    res.send("It handles only the incoming hello request.!");
});


// app.use("/", (req, res) => {
//     res.send("Hello Hello Hello !!!");
// });







app.listen(7000 , () => {
    console.log("Server Successfully on the port no 7000...");
});





// from video no. 18 --> middlewares and error handling


// app.use("/route", rh1, [rh2, rh3], rh4, rh5)

// in a route  --> there can be multiple routing.
app.use("/user", [(req, res, next) => {
    console.log("Handling the route user 1.");     
    // res.send("Response.!!!");
    next();

},(req, res, next) => {
    console.log("Handling the route user 2."); 
    res.send("2nd Response.!!!");
    // next();

},],(req, res, next) => {
    console.log("Handling the route user 3.");     
    // res.send("3rd Response.!!!");
    next();

},(req, res, next) => {
    console.log("Handling the route user 4.");     
    // res.send("4th Response.!!!");
    next();

}, (req, res, next) => {
    console.log("Handling the route user 5.");     
    res.send("5th Response.!!!");
    next();
});




// listening the request from the user and middlewares.
app.listen(7000, () => {
    console.log("Server successfully running on port_no 7000.");
});


// video_no. 18 --> doing admin and user authentication.

const {adminAuth, userAuth} = require("./middlewares/auth");


app.use("/admin", adminAuth);


app.get("/admin/getAllData", (req, res) => {
    res.send("Get all the data for the user.");
});

app.get("/admin/deleteData", (req, res) => {
    res.send("Deleted all data.");
});



app.post("/user/login", (req, res) => {       // for user login ,no need to do authentication.
    res.send("User logged in successfully.");
});


app.get("/user/data", userAuth, (req, res) => {
    res.send("user data sent.")
});





app.listen(7000, () => {
    console.log("Server successfully running on the port_no 7000.");
});




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