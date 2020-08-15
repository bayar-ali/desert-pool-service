const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const custSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Customer first name is required'],
    minlength: 1
  },
  lastName: {
    type: String,
    required: [true, 'Customer last name is required'],
    minlength: 1
  },
  address: {
    street: String,
    city: String,
    state: { type: String, maxlength: 2 },
    zipcode: { type: String }
  },
  phone_num: {
    type: { $type: String },
    required: [true, 'Customer phone number is required. Must be in the form of (XXX) XXX-XXXX'],
    min: [10, 'Has to be a number of at least 10 digits']
  },
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email address.',
    ],
    required: [true, 'Please enter Email Address'],
    unique: true,
    lowercase: true,
    dropDups: true
  },
  membership_date: {
    type: Date,
    default: Date.now()
  },
  workOrders: [{
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customers",
    },
    completed_date: {
      type: Date,
      default: Date.now()
    },
    salt_pool: {
      type: Boolean,
      default: false,
      required: true
    },
    filter: {
      type: String,
      required: true
    },
    timestamps: {
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
    },
    scheduled_date: {
      type: Date,
      default: Date.now()
    },
    next_date_of_service: {
      type: Date,
    }
  }],

  coords: {
    lat: { type: Number },
    lng: { type: Number }
  }
});
//Customers full-name 
custSchema.methods.setFullName = () => {
  this.full_name = `${this.firstName} ${this.lastName}`
}
const Customers = mongoose.model("Customers", custSchema);

module.exports = Customers;