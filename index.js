const express = require("express"); 
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
require('cors');
const keys = require("./config/keys");
const cors = require('cors');

const hotelRooms = require('./routes/api/hotels')

app.use(express.json());

mongoose
  .connect(keys.mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to DB"))
  .catch(error => console.log("DB Connection error", error));

app.use(express.static("public"));
app.use('/api/nasa', hotelRooms); 

app.listen(3000, () => console.log("listening on port 3000"));