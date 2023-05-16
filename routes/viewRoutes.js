const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
const assetController = require("../controllers/assetController");
const router = express.Router();

router.get(
  "/",
  assetController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);

router.get(
  "/assets/:slug",
  authController.isLoggedIn,
  viewsController.getAsset
);

router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);
router.get("/signup", authController.isLoggedIn, viewsController.getSignupForm);

router.get("/me", authController.protect, viewsController.getAccount);

router.get("/my-bids", authController.protect, viewsController.getMyBids);
module.exports = router;
