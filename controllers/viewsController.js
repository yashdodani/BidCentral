const User = require("../models/userModel");
const Asset = require("../models/assetModel");

exports.getOverview = async (req, res, next) => {
  // 1) Get tour data from the collection
  const assets = await Asset.find();

  // 2) build template
  // 3) Render the template using data from 1)
  res.status(200).render("overview", {
    title: "All assets",
    tours: assets,
  });
};

exports.getAsset = async (req, res, next) => {
  // 1) get the data for the requested tour (including reviews and guides)
  const asset = await Asset.findOne({ slug: req.params.slug });

  if (!asset) {
    return next(new Error("There is no tour with that name", 400));
  }

  // 2) build the template

  // 3) render template using the data

  res.status(200).render("asset", {
    title: `${asset.name}`,
    tour: asset,
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.getSignupForm = (req, res) => {
  res.status(200).render("signup", {
    title: "Create new account",
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render("account", {
    title: "Your account",
  });
};

exports.getMyBids = async (req, res) => {
  try {
    // comes from protect
    const user = req.user;
    console.log(user);

    const assetSlugs = user.bids.map((el) => el.asset);
    console.log(assetSlugs);

    const tours = await Asset.find({ slug: { $in: assetSlugs } });
    console.log(tours);

    res.status(200).render("myBids", {
      title: "My Bids",
      tours,
    });
  } catch (err) {
    console.log(err.message);
  }
};
