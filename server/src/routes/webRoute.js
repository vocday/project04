const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const homeController = require("../controllers/home.controller");

const authMiddleware = require("../middleware/auth.mid");


function route(app) {
  //auth
  router.post("/open-account", authController.openaccount);
  router.post("/login", authController.login);
  router.post("/logout", authMiddleware.verifyAccessToken, authController.logout);
  router.post("/refresh-token", authController.refreshToken);

  //info & profile
  // router.use("/update-info", userRouter);
  // router.use("/update-profile", userRouter);

  //public
  // router.use("/assets", );
  // router.use("/find-assets", );
  // router.use("/price-board", );

  //dashboard

  //account

  //homepage
  router.use("/", homeController.home);
  router.use("/", authController.login);

  return app.use("/", router);
}

module.exports = route;
