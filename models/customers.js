const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const custSchema = new Schema({
  Name: { 
    type: String, 
    required: [true, 'Customer name is required'],
    minlength: 1 
  },
  Address: { 
    type: String, 
    required: [true, 'Customer address is required'] 
  },
  Phone_Num: {
    type: Number,
    required: [true, 'Customer phone number is required'], 
    min: [10, 'Has to be a number of at least 10 digits']
  },
  Email: { 
    type: String, 
    required: [true, 'User phone number required'],
    
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
