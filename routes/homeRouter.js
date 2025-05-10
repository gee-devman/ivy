const eggModel = require("../models/eggModel");
const router = require("express").Router();
const Handlebars = require("handlebars");

Handlebars.registerHelper("add", function (a, b) {
  return a + b;
});

router.get("/", async (req, res) => {
  const data = await eggModel.find({}).lean();
  res.render("layouts/home", { title: "Dashboard", data });
});

module.exports = router;
