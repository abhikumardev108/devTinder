

const jwt = require("jsonwebtoken");
const User = require("../models/user");


// const adminAuth = (req, res, next) => {
//     console.log("Checking for admin to be authorized.");
//     const token = "xyz";
//     const isAuthorized = token === "xyz";

//     if(!isAuthorized) {
//         res.status(401).send("Unauthorized admin.");
//     } else {
//         next();
//     }
// }




const userAuth = async (req, res, next) => {
    
    try {
        // read the token from the request cookies.
        const cookies = req.cookies;
        const {token} = cookies;

        if(!token) {
            throw new Error("Token is not valid.!!!");
        }

        // verify the token.
        const decodedObj = await jwt.verify(token , "DEV@TINDER500");

        const {_id} = decodedObj;
        const user = await User.findById(_id);
        console.log(user);

        if(!user) {
            throw new Error("user not found.!");
        }

        req.user = user;

        next();
    } catch(err) {
        res.status(404).send("error : " + err.message);
    }
};



module.exports = {
    userAuth
}