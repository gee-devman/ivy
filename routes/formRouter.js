const eggModel = require("../models/eggModel");
const appleModel = require("../models/appleModel");
const router = require("express").Router();
const Handlebars = require("handlebars");

Handlebars.registerHelper("add", function (a, b) {
  return a + b;
});

Handlebars.registerHelper("format", function (date) {
  return date.toLocaleDateString();
});

router.get("/", async (req, res) => {
  const data = await eggModel.find({}).lean();
  res.render("layouts/form", { title: "Daily Sales", data });
});

router.post("/egg", async (req, res) => {
  const {
    date,
    bought_qty,
    type,
    bought_price,
    sold_qty_sm,
    sold_qty_bg,
    sold_prize_sm,
    sold_prize_bg,
    crack,
    total,
    miscellaneous,
    note,
  } = req.body;

  //
  const newData = new eggModel({
    date,
    bought_qty,
    type,
    bought_price,
    sold_qty_sm,
    sold_qty_bg,
    sold_prize_sm,
    sold_prize_bg,
    crack,
    total,
    miscellaneous,
    note,
  });
  try {
    await newData.save();
    res.status(201).json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving data." });
  }
});

//
router.post("/apple", async (req, res) => {
  const {
    date,
    green_price_bought,
    green_qty_bought,
    green_qty_bought_type,
    miscellaneous,
    note,
    red_price_bought,
    red_qty_bought,
    red_qty_bought_type,
    sold_green_price,
    sold_green_qty,
    sold_red_price,
    sold_red_qty,
    spoil,
    total,
  } = req.body;

  //
  const newData = new appleModel({
    date,
    green_price_bought,
    green_qty_bought,
    green_qty_bought_type,
    miscellaneous,
    note,
    red_price_bought,
    red_qty_bought,
    red_qty_bought_type,
    sold_green_price,
    sold_green_qty,
    sold_red_price,
    sold_red_qty,
    spoil,
    total,
  });
  try {
    await newData.save();
    res.status(201).json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving data." });
  }
});

module.exports = router;
