const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: String,
    description: String,
    startingBid: Number,
    currentBid: Number,
    endTime: Date,
    imageUrl: String,
});

module.exports = mongoose.model('Auction', auctionSchema);

// Define a schema for the Auction model
 // The title or name of the auction
 // A description of the auction item
 // The starting bid amount for the auction
 // The current highest bid for the auction
 // The date and time when the auction ends