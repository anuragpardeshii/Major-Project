const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define a Mongoose schema for a listing
const listingSchema = new Schema({
    title: {
        type: String,
        required: true, // Title is a required field, must be a string
    },
    description: String, // Description is optional, can be a string
    image: {
        filename: {
            type: String, // Filename is a string
            default: '', // Default filename
        },
        url: {
            type: String, // URL is a string
            default: "https://via.placeholder.com/150", // Default URL for the image
            set: (v) => (v ? v : "https://via.placeholder.com/150"), // Default URL if empty
        },
    },
    price: {
        type: Number, // Price is optional, can be a number
        min: 0, // Ensure price is non-negative
    },
    location: String, // Location is optional, can be a string
    country: String, // Country is optional, can be a string
});

// Create a Mongoose model for the listing
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
