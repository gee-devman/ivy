const mongoose = require("mongoose");

const appleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  bought_qty: { type: Number, require: false },
  type: { type: String },
  bought_price: { type: Number, required: false },
  sold_qty_green: { type: Number },
  sold_qty_red: { type: Number },
  sold_prize_green: { type: Number },
  sold_prize_red: { type: Number },
  spoil: { type: Number },
  total: { type: Number },
  miscellaneous: { type: Number, required: false },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Apple", appleSchema);
