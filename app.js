var express = require("express"),
        app = express();

indexRoutes = require("./routes/index");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(indexRoutes);

app.listen(port, () => {
  console.log("Mathching web app started on port: " + port);
});