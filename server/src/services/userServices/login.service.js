const jwt = require("jsonwebtoken");

function Login(req, res) {

    console.log(req.body);
    res.status(200).json({ message: "Nothing to send!!!" });
    //navigate
    //send access & refresh token
}

module.exports = Login;