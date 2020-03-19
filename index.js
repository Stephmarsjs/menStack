const mongoose = require("mongoose");
const express = require("express");
const keys = require("./config/keys");
const hotelRoom = require('./routes/api/hotels')
const Joi = require('joi'); 

const app = express();

app.use(express.json());

mongoose
  .connect(keys.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log("connected to db"))
  .catch(error => console.log("DB Connection error", error));

app.use(express.static("public"));
app.use('/api/nasa', hotelRoom); 

app.listen(3000, () => console.log("listening on port 3000"));
