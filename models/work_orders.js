const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOrderSchema = new Schema({
    Customer: {
        type: Schema.Types.ObjectId,
        ref: "Customers",
    },
    Completed: {
        type: Boolean,
        default: false,
        required: true

    },
    Salt_Pool: {
        type: Boolean,
        default: false,
        required: true
    },
    Filter: String,
    create_date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    scheduled_date: {
        type: Date,
        default: Date.now()
    }
});

const WorkOrders = mongoose.model("Work Orders", workOrderSchema);

module.exports = WorkOrders;
