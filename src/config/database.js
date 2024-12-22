
const mongoose = require('mongoose');


// connecting to the mongoose cluster.
const connectDB = async() => {
    await mongoose.connect(
        "mongodb+srv://namastedev:k5brPkjfFErLWbc9@namastenode.vauvy.mongodb.net/devTinder"
    );    
};




module.exports = {
    connectDB,
}



