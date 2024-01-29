const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
},{timestamps:true});


const userdb = new mongoose.model("users",UserSchema);

module.exports = userdb;
