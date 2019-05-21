const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const messagesRoutes = require('./routes/messages');

const app = express();
//TODO: create mongodb
/*
mongoose.connect("SERVERIP", {
  useNewUrlParser: true
}).then(() => {
  console.log("Connected to database!");
}).catch((err) => {
  console.log("Connection failed!");
  console.error(err);
});
*/
app.use(bodyParser.json());

//allow all GET request to /app/images/*.*
app.use("/images", express.static(path.join("app/images")));
//allow all GET requests to ../frontend/*.*
app.use("/", express.static(path.join('../frontend/')));

//only allow GET, PUT, POST, PATCH, DELETE, OPTIONS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-Width, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use("/api/messages", messagesRoutes);


module.exports = app;