const express = require("express");
const routers = require('./src/routes/routers');
const app = express();

app.use('/', routers);


module.exports = app;