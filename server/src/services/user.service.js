const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parser");
const db = require('../db/mysql/models/index')
const authUtils = require('../utils/auth.utils');

dotenv.config()

// const generateAccessToken = (user) => {
//     return jwt.sign({
//         userId: user.id,
//         role: user.roleId,
//     }, process.env.JWT_SECRET, { expiresIn: '30s' })
// };

// const generateRefreshToken = (user) => {
//     return jwt.sign({
//         userId: user.id,
//         role: user.roleId,
//     }, process.env.JWT_SECRET, { expiresIn: '10m' })
// };

const openaccount = async (req) => {
    try {
        console.log(req)
        //hash password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashed = await bcrypt.hash(req.password, salt);

        // create new user        
        await db.User.create({
            // userId: DataTypes.STRING,
            // typeId: DataTypes.STRING,
            password: hashed,
            email: req.email,
            phoneNumber: req.phoneNumber,
        })
    } catch (error) {
        console.log(error)
    }
}


const login = async (req, res) => {
    //check email password
    //generate access & refresh token
    //send data
    // console.log("**************************************************************")
    // console.log(req.body)
    // console.log("**************************************************************")

    try {
        const user = await db.User.findOne({
            where: { email: req.body.email },
            raw: true
        })

        if (!user) {
            return res.status(404).json("Email Not Registered !!!")
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(404).json("Wrong password !!!")
        }

        if (user && validPassword) {
            const accessToken = await authUtils.generateAccessToken(user)
            const refreshToken = await authUtils.generateRefreshToken(user)
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                path: "/",
                secure: false,
                sameSite: "strict"
            })

            const data = {
                userId: user.id,
                role: user.roleId,
                accessToken: accessToken,
            }

            return res.status(200).json(data)
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (refreshToken) {
            res.clearCookie("refreshToken")
            return res.status(200).json("LOGGED OUT !!!")
        } else {
            return res.status(401).json("You are not authenticated !!!")
        }
        // console.log(req)

    } catch (error) {
        console.log(error)
    }
}


const updateprofie = async (req) => {
    try {
        console.log(req)

    } catch (error) {
        console.log(error)
    }
}


const deleteaccount = async (req) => {
    try {
        console.log(req)

    } catch (error) {
        console.log(error)
    }
}


module.exports = { openaccount, login, logout, updateprofie, deleteaccount, }

