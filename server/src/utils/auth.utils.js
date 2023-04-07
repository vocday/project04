const db = require('../db/mysql/models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
const user = require('../db/mysql/models/user');

dotenv.config()

const authUtils = {
    generateAccessToken(user) {
        return jwt.sign({
            userId: user.id,
            role: user.roleId,
        }, process.env.JWT_SECRET, { expiresIn: '30s' })
    },

    generateRefreshToken(user) {
        return jwt.sign({
            userId: user.id,
            role: user.roleId,
        }, process.env.JWT_SECRET, { expiresIn: '10m' })
    },

    renewToken(req, res) {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) {
            res.status(401).json("You are not authenticated !!!");
        }
        jwt.verify(refreshToken, process.env.JWT_SECRET, function (err, user) {
            if (err) {
                res.status(403).json("Invalid Token !!!")
            }
            const newRefreshToken = authUtils.generateRefreshToken(user);
            const newAccessToken = authUtils.generateAccessToken(user);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                path: "/",
                secure: false,
                sameSite: "strict"
            });
            res.status(200).json(newAccessToken);
        })

    },
}

module.exports = authUtils
