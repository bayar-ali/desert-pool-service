const express = require("express");

const mongoose = require("mongoose");
const routes = require("./src/routes");
const app = express();
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

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/customerlist", { useNewUrlParser: true, useUnifiedTopology: true });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//test seed 
const createCustomer = async () => {
  try {
    const customer = {
      Name: "Bob Smith",
      Address: "123 Smith Lane",
      Email: "bsmith@gmail.com",
      Salt_Pool: true,
      Filter: "Sand",
      created_date: "7/26/20",
      scheduled_date: "7/29/20"
    }

    const data = await Customers.create(customer);

    console.log(data);

  } catch (error) {
    console.log(error)
  }
}

createCustomer(); 