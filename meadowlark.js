const express = require("express");
const expressHandlebars = require("express-handlebars");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname + "/public")); //__dirname 폴더경로
const fortune = require("./modules/lib/fortune");

app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
  res.render("about", { fortune: fortune.getFortune() });
});
// custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Express started on http://localhost:${port}` +
        ";press Ctrl-c to terminate"
    );
  });
} else {
  module.exports = app;
}
