const eggModel = require("../models/eggModel");
const router = require("express").Router();
const Handlebars = require("handlebars");

router.delete("/egg/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await eggModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting data." });
  }
});

//
router.delete("/apple/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await eggModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting data." });
  }
});

module.exports = router;
