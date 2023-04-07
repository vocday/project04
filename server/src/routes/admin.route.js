const express = require("express");
const adminRouter = express.Router();

const authController = require("../controllers/auth.controller");
const homeController = require("../controllers/home.controller");
const assetController = require("../controllers/asset.controller");

const authMiddleware = require("../middleware/auth.mid");

function adminRoute(app) {
  //auth
  adminRouter.post("/open-account", authController.openaccount);
  adminRouter.post("/login", authController.login);
  adminRouter.post("/logout", authMiddleware.verifyAccessToken, authController.logout);
  adminRouter.post("/refresh-token", authController.refreshToken);

  //info & profile
  // adminRouter.use("/update-info", useradminRouter);
  // adminRouter.use("/update-profile", useradminRouter);

  //search

  //asset
  adminRouter.get("/manage-assets/create", assetController.buyOrder.list);
  adminRouter.post("/manage-assets/update", assetController.buyOrder.create);

  return app.use("/", adminRouter);
}

module.exports = adminRoute;
