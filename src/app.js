const express = require('express');
const app = express();




// this will only handle '/user' api call.
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


