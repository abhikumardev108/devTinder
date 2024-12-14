// This file is made for the practice purpose.

const express = require('express');
const app = express();


app.use("/test", (req,res) => {
    res.send("Test from the server.!");
});

app.use("/hello", (req, res) => {
    res.send("Hello from the server.!");
});


app.listen(4000, () => {
    console.log("Server Successfully running on the port no 4000...");
});