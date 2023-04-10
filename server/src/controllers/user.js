const user = require("../db/mongo/models/user");
const jwt = require("jsonwebtoken");

class userController {
  authLogin(req, res, next) {
    console.log(req.body.username);
    user
      .findOne({ username: req.body.username })
      .then((user) => {
        console.log(user);
        if (user) {
          const token = jwt.sign({ user }, "token");
          res.json({ token, user });
          return;
        }
        res.status(404).json({ err: "user not found !!!" });
      })
      .catch(next);
  }

  getAll(req, res, next) {
    try {
      const [bearer, token] = req.headers.authorization.split(" ");
      console.log(token);
      const tokenVerify = jwt.verify(token, "token");
      console.log(tokenVerify);

      user
        .find({})
        .then((user) => {
          if (user) {
            res.json(user);
            return;
          }
          res.status(404).json({ err: "usersss not found !!!" });
        })
        .catch(next);
    } catch (error) {
      res.status(401).json({ err: "user rejected !!!" });
    }
  }
}
module.exports = new userController();
