const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workOrderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customers",
    },
    completed_date: {
        type: Date,
        default: Date.now()
    },
    salt_Pool: {
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
    }
});

const WorkOrders = mongoose.model("Work Orders", workOrderSchema);

module.exports = WorkOrders;
