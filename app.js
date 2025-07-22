const express = require("express");
const port = process.env.PORT || 3000;

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = [];


app.get("/", (req, res) => {
  res.render("list", { items: items });
});


app.post("/", (req, res) => {
  const item = req.body.name.trim();
  if (item) {
    items.push(item);
  }
  res.redirect("/");
});


app.post("/delete", (req, res) => {
  const index = req.body.index;
  items.splice(index, 1);
  res.redirect("/");
});


app.post("/edit", (req, res) => {
  const index = req.body.index;
  const value = req.body.value;
  res.render("edit", { index, value });
});


app.post("/update", (req, res) => {
  const index = req.body.index;
  const updatedItem = req.body.updatedItem.trim();
    items[index] = updatedItem;
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`The Server Is LIVE At http://localhost:${port}`);
});
