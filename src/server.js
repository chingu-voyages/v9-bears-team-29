const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

const mongoose = require("mongoose", () => console.log("moongose connected"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(process.env.DB_URI, () => console.log("mongose connected"));

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Server at: http://localhost:${app.get("port")}/`);
});
