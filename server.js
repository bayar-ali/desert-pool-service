const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
require('dotenv').config()

//For test
// const Customers = mongoose.model("Customers")
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

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

var request = require("request");

var options = {
  method: 'POST',
  url: 'https://YOUR_DOMAIN/dbconnections/signup',
  headers: {'content-type': 'application/json'},
  body: {
    client_id: 'YOUR_CLIENT_ID',
    email: '$(\'#signup-email\').val()',
    password: '$(\'#signup-password\').val()',
    connection: 'YOUR_CONNECTION_NAME',
    name: '$(\'#name\').val()',
    user_metadata: {color: 'red'}
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

// app.post('/dev-4anh9rsd.us.auth0.com/dbconnections/signup', function (req, res) {
//   req.body()
// })

module.exports = app;
