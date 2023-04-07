const db = require('../db/mysql/models/user')
const userService = require('../services/user.service')
const { renewToken } = require('../utils/auth.utils')

const authController = {
    async openaccount(req, res) {
        try {
            await userService.openaccount(req.body)
            res.status(200).json({ message: "Create new user succeed !!!" })
        } catch (error) {
            res.status(500).json(error)
        }
    },


    async login(req, res) {
        try {
            await userService.login(req, res)
        } catch (error) {
            res.status(500).json(error);
        }
    },


    async logout(req, res) {
        try {
            await userService.logout(req, res)
            // res.status(200).json(req, res);
            // res.status(200).json({ message: "LOGGED OUT !!!" });
        } catch (error) {
            console.log(error)
        }
    },

    async refreshToken(req, res) {
        try {
            const newAccessToken = await renewToken(req, res)
            res.status(200).json(newAccessToken);
        } catch (error) {
            console.log(error)
        }
    },

}



module.exports = authController;
