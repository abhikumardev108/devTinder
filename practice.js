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

