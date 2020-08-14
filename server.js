const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
require('dotenv').config()

const PORT = process.env.PORT || '3001';

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// Add routes, both API and view
app.use(routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const uri = (`mongodb+srv://dgrant:desertpools@${process.env.MONGO_ATLAS_PASS}.gd8gi.mongodb.net/pools_db?retryWrites=true&w=majority`)

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    //Confirm that DB is connected 
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err))

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
