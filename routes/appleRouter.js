const eggModel = require("../models/eggModel");
const router = require("express").Router();
const Handlebars = require("handlebars");

Handlebars.registerHelper("add", function (a, b) {
  return a + b;
});

router.get("/", async (req, res) => {
  const data = await eggModel.find({}).lean();
  res.render("layouts/form", { title: "Daily Sales", data });
});

router.post("/", async (req, res) => {
  const {
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

module.exports = router;
