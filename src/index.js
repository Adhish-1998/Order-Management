const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const mongoose  = require("mongoose");
require('dotenv').config()

const app = express();

app.use(bodyParser.json());

mongoose.connect( proecess.env.CONNECTION_STRING, { useNewUrlParser: true })
.then(() => console.log("MongoDb is connected"))
.catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 5000 , function () {
  console.log("Express app running on port " + (process.env.PORT || 5000));
});