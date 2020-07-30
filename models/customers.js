const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const custSchema = new Schema({
  Name: { 
    type: String, 
    required: true, 
    minlength: 1 
  },
  Address: { 
    type: String, 
    required: true 
  },
  Email: { 
    type: String, 
    required: true 
  },
  create_date: { 
    type: Date, 
    default: Date.now() 
  },
  work_orders: [{
    type: Schema.Types.ObjectId,
    ref: "workOrder"
  }]

});

const Customers = mongoose.model("Customers", custSchema);

module.exports = Customers;
