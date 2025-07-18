const express = require("express");
const port = 3000;

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const example = "Working";
const items = [];

app.get("/", (req, res) => {
  res.render("list", { exej: example, items: items });
});

app.post("/", (req, res) => {
  const item = req.body.name.trim(); // remove whitespace
  if (item) {
    items.push(item); // only push if not empty
  }
  res.redirect("/");
});
app.post("/delete", (req, res) => {
  const index = req.body.index;
  items.splice(index, 1);  // Remove the item
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`The Server Is LIVE At http://localhost:${port}`);
});
