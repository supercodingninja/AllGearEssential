// Ref. "Multiple CSS Files with Express Handlebars" by Esterling Accimehttps://www.youtube.com/watch?v=o4njTeKjGWQ //
// Global //
const express = require("express");
const router = express.Router();

// Routing //
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "All Gear Essential",
    style: "home.scss",

    test: "<h3>Your Gear Is Essential...</h3>"
  });
});

module.exports = router;
