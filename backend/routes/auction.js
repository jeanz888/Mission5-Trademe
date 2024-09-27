const express = require('express'); // Import the Express framework
const Auction = require('../models/Auction'); // Import the Auction model
const router = express.Router(); // Create a new router object

// Get all auctions
router.get('/', async (req, res) => { // Define a GET route to fetch all auctions
    const auctions = await Auction.find(); // Fetch all auctions from the database
    res.json(auctions); // Send the auctions as a JSON response
});

// Create a new auction
router.post('/', async (req, res) => { // Define a POST route to create a new auction
    const newAuction = new Auction(req.body); // Create a new Auction object with the request body data
    await newAuction.save(); // Save the new auction to the database
    res.status(201).json(newAuction); // Send the created auction as a JSON response with a 201 status code
});

module.exports = router; // Export the router object for use in other parts of the application