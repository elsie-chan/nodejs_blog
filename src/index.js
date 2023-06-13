const path = require('path');
const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: false
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "srcs", "views"));

//route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
