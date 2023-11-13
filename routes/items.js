const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// Create
router.post("/", async (req, res) => {
  const newItem = new Item(req.body);
  try {
    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
router.patch("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
