const eggModel = require("../models/eggModel");
const appleModel = require("../models/appleModel");
const router = require("express").Router();
const Handlebars = require("handlebars");

Handlebars.registerHelper("add", function (a, b) {
  return a + b;
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
    bought_qty,
    type,
    bought_price,
    sold_qty_green,
    sold_qty_red,
    sold_prize_green,
    sold_prize_red,
    spoil,
    total,
    miscellaneous,
    note,
  } = req.body;

  //
  const newData = new appleModel({
    date,
    bought_qty,
    type,
    bought_price,
    sold_qty_green,
    sold_qty_red,
    sold_prize_green,
    sold_prize_red,
    spoil,
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

module.exports = router;
