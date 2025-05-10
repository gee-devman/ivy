const mongoose = require("mongoose");

const EggSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  bought_qty: { type: Number, require: false },
  type: { type: String },
  bought_price: { type: Number, required: false },
  sold_qty_sm: { type: Number },
  sold_qty_bg: { type: Number },
  sold_prize_sm: { type: Number },
  sold_prize_bg: { type: Number },
  crack: { type: Number },
  total: { type: Number },
  miscellaneous: { type: Number, required: false },
  note: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Egg", EggSchema);
