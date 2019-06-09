const express = require("express");
const app = express();

const appConfig = require('./config/main-config');
const routeConfig = require('./config/route-config');

appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;