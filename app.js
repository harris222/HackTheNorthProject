const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
    

indexRoutes = require("./routes/index");

const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://pcsanchez:water@4pair-cmu0t.mongodb.net/test?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if(err) {
    console.log("DATABASE ERROR");
    console.log(err);
    return;
  }
  console.log("Database connected");
});

app.set("view engine", "ejs");

app.use(indexRoutes);



app.listen(port, () => {
  console.log("Mathching web app started on port: " + port);
});