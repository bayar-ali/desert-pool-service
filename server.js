const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
require('dotenv').config()

//For test
const Customers = mongoose.model("Customers")
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

// Auth0 
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-4anh9rsd.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://desertpools-users/api',
  issuer: 'https://dev-4anh9rsd.us.auth0.com/',
  algorithms: ['RS256']
});


app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

module.exports = app;

//test seed 
// const createCustomer = async () => {
//   try {
//     const customer = {
//       Name: "Bob Smith",
//       Address: "123 Smith Lane",
//       Email: "bsmith@gmail.com",
//       Salt_Pool: true,
//       Filter: "Sand",
//       created_date: "7/26/20",
//       scheduled_date: "7/29/20"
//     }

//     const data = await Customers.create(customer);

//     console.log(data);

//   } catch (error) {
//     console.log(error)
//   }
// }

// createCustomer(); 