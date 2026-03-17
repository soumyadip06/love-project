const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let responses = [];

// Save response
app.post("/response", (req, res) => {
  const data = req.body;
  responses.push(data);
  console.log("New Response:", data);
  res.json({ message: "Saved!" });
});

// Get all responses
app.get("/responses", (req, res) => {
  res.json(responses);
});

// Root route (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Server is running ❤️");
});

// ✅ Correct port setup
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});