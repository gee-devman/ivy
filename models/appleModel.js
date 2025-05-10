const mongoose = require("mongoose");

const appleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  green_price_bought: { type: Number },
  green_qty_bought: { type: Number },
  green_qty_bought_type: { type: String },
  red_price_bought: { type: Number },
  red_qty_bought: { type: Number },
  red_qty_bought_type: { type: String },
  sold_green_price: { type: Number },
  sold_green_qty: { type: Number },
  sold_red_price: { type: Number },
  sold_red_qty: { type: Number },
  spoil: { type: Number },
  total: { type: Number },
  miscellaneous: { type: Number, required: false },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Apple", appleSchema);
