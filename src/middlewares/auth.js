

const adminAuth = (req, res, next) => {
    console.log("Checking for admin to be authorized.");
    const token = "xyz";
    const isAuthorized = token === "xyz";

    if(!isAuthorized) {
        res.status(401).send("Unauthorized admin.");
    } else {
        next();
    }
}




const userAuth = (req, res, next) => {
    console.log("Checking for user to be authorized.");
    const token = "xyzasdf";
    const isAuthorized = token === "xyz";

    if(!isAuthorized) {
        res.status(401).send("Unauthorized user.");
    } else {
        next();
    }
}


module.exports = {
    adminAuth,
    userAuth
}