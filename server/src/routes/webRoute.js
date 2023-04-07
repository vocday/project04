const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const homeController = require("../controllers/home.controller");
const assetController = require("../controllers/asset.controller");

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

  //asset
  //buy
  router.get("/manage-assets/buy-order-list", assetController.buyOrder.list);
  router.post("/manage-assets/create-buy-order", assetController.buyOrder.create);
  router.post("/manage-assets/edit-buy-order", assetController.buyOrder.edit);
  router.post("/manage-assets/cancel-buy-order", assetController.buyOrder.cancel);
  //sell
  router.get("/manage-assets/sell-order-list", assetController.sellOrder.list);
  router.post("/manage-assets/create-sell-order", assetController.sellOrder.create);
  router.post("/manage-assets/edit-sell-order", assetController.sellOrder.edit);
  router.post("/manage-assets/cancel-sell-order", assetController.sellOrder.cancel);
  //rent
  router.post("/manage-assets/rent", assetController.rentServices.rent);
  router.get("/manage-assets/rent-list", assetController.rentServices.list);

  //coach service
  router.get("/manage-assets/book-coach", assetController.coachServices.bookCoach);
  router.post("/manage-assets/cancel-coach", assetController.coachServices.cancelCoach);

  //account



  //homepage
  router.use("/", homeController.home);

  return app.use("/", router);
}

module.exports = route;
