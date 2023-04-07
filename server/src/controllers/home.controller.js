const db = require("../db/mysql/models/user");
const userService = require("../services/user.service");
const { renewToken } = require("../utils/auth.utils");

const homeController = {
  async home(req, res) {
    try {
      res.status(200).json({ message: "WELCOME TO GROUP 3 !!!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = homeController;
