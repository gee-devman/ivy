const exphbs = require("express-handlebars");
const connectDB = require("./database/db");
const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Setup Handlebars as view engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: "views/layouts",
    partialsDir: "views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/form", require("./routes/formRouter"));
app.use("/form/apple", require("./routes/appleRouter"));
app.use("/delete", require("./routes/delRouter"));
app.get("/", require("./routes/homeRouter"));

(async () => {
  await connectDB();
})();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
