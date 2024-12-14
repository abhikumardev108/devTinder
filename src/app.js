const express = require('express');

const app = express();

// This is request handler.

// app.use((req, res) => {
//     res.send("It handled all the incoming request.!");
// });


app.use("/test", (req, res) => {
    res.send("It handles only the incoming test request.!");
});


app.use("/hello", (req, res) => {
    res.send("It handles only the incoming hello request.!");
});


app.listen(7000 , () => {
    console.log("Server Successfully on the port no 7000...");
});