const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const custSchema = new Schema({
  Name: { type: String, required: true, minlength: 1 },
  Address: { type: String, required: true },
  Email: { type: String, required: true },
  Salt_Pool: { type: Boolean, default: false, required: true }, 
  Filter: String,
  create_date: { type: Date, default: Date.now() }, 
  scheduled_date: { type: Date, default: Date.now() }

});

const Customers = mongoose.model("Customers", custSchema);

module.exports = Customers;
