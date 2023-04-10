const jwt = require("jsonwebtoken");
const db = require('../db/mysql/models/index')
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');

dotenv.config()

const authMiddleware = {
    verifyAccessToken(req, res, next) {
        const token = req.headers.authorization
        if (token) {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_SECRET, function (err, user) {
                if (err) {
                    return res.status(403).json("Invalid Token !!!")
                }
                req.user = user;
                next();
            });
        }
        else {
            res.status(401).json("You are not authenticated !!!")
        }
    },
}

module.exports = authMiddleware;
