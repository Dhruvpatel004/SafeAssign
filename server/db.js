const dotenv = require("dotenv");
dotenv.config();
const {MONGO_URL } = process.env;

const mongoose = require('mongoose')
const mongoURL = MONGO_URL

const connectToMongo =async () => {
    const a= await mongoose.connect(mongoURL)
    console.log('Connected to DB')
}

module.exports = connectToMongo;