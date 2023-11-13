const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/items");
const healthRoutes = require("./routes/health");

const app = express();
const port = 3000;

// Connect to MongoDB
const mongoDBUri = process.env.MONGODB_URI;
mongoose.connect(mongoDBUri, { useNewUrlParser: true });

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/items", itemRoutes);
app.use("/health", healthRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
