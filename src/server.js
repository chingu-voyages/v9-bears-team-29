const express = require("express");
const app = express();
// require("dotenv").config();
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Server at: http://localhost:${app.get("port")}/`);
});
