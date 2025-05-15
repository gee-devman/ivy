const noteModel = require("../models/noteModel");
const router = require("express").Router();

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting data." });
  }
});

//
router.post("/", async (req, res) => {
  try {
    const { _id, note } = req.body;
    await noteModel.findByIdAndUpdate(_id, { note });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding data." });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await noteModel.findOne().lean();
    res.render("layouts/note", {
      note: result.note,
      noteId: result._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching data." });
  }
});

module.exports = router;
