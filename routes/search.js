const express = require("express");
const Listing = require("../models/listing"); 
const router = express.Router(); // Initialize router

// Search route - Handles both search and listing display
router.get("/", async (req, res) => {
  const searchQuery = req.query.search;  // Get search query from URL
  let allListings = [];

  if (searchQuery) {
    // If searchQuery is provided, filter listings by title
    allListings = await Listing.find({
      title: { $regex: searchQuery, $options: "i" }  // Case-insensitive search
    });
  } else {
    // Fetch all listings if no search query
    allListings = await Listing.find();
  }
  if (allListings.length === 0) {
    req.flash("error", `No listings found for "${searchQuery}".`);  // Set flash message
  }

  // Render the index view with the filtered listings and searchQuery
  res.render("listings/index", { allListings, searchQuery });
});

module.exports = router;
