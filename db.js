const mongoose = require('mongoose');

// Set up MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/hotel')

const db = mongoose.connection;

// Event listeners for MongoDB
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

// Export the db
module.exports = db;
