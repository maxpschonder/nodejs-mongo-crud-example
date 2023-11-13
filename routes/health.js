const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Liveness probe endpoint
router.get("/live", (req, res) => {
  res.status(200).send("OK");
});

// Readiness probe endpoint
router.get("/ready", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send("OK");
  } catch (error) {
    res.status(500).send("Not Ready");
  }
});

module.exports = router;
