const express = require("express");
const http = require("http");
const app = require('./app');

app.set("port", process.env.PORT || 3001);

const server = http.createServer(app);

server.listen(app.get("port"), () => {
  console.log(`Server at: http://localhost:${app.get("port")}/`);
});
