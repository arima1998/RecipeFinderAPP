const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
// Import Routes
const postRoute = require('./routes/posts');
app.use('/posts',postRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We r on home");
});


mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser : true},
() => console.log("WE R ON DB") );

app.listen(3000);
