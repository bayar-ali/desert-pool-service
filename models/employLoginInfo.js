const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployLoginSchema = new Schema({
    username: {
        type: String,
        required: [true, 'A username is required'],
        minlength: 1
    },
    password: {
        type: String,
        required: [true, 'A password is required'],
        minlength: 8
    }
});

const EmployLogin = mongoose.model("Login Info", EmployLoginSchema);

module.exports = EmployLogin;
