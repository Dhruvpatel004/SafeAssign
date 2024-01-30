// src/config/db.js

const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
};

// Immediately invoke the connectToMongo function when this module is imported
connectToMongo();

// Export the function so it can be used if needed
module.exports = connectToMongo;
