const express = require('express'); // Import the Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction
const cors = require('cors'); // Import CORS to allow cross-origin resource sharing
require('dotenv').config(); // Import dotenv to load environment variables

const app = express(); // Create an Express application
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable parsing JSON bodies in requests

const PORT = process.env.PORT || 5000; // Define the port to run the server, default to 5000 if not in environment variables

const auctionRoutes = require('./routes/auction'); // Import routes for handling auction-related API endpoints
app.use('/api/auctions', auctionRoutes); // Use the auction routes for any requests to /api/auctions

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Connect to MongoDB using environment variable for URI
    .then(() => console.log('MongoDB connected')) // Log success on successful connection
    .catch(err => console.log(err)); // Log error if connection fails

app.listen(PORT, () => { // Start the Express server
    console.log(`Server running on port ${PORT}`); // Log the port number the server is listening on
});