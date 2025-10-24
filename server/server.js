const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

const restaurantsData = require("./restos.json");
const menusData = require("./menu.json");

// Restaurants API
app.get("/dapi/restaurants/list/v5", (req, res) => {
  res.json(restaurantsData);
});

// Menu API
app.get("/dapi/menu/pl", (req, res) => {
  const { restaurantId } = req.query;
  const menu = menusData[restaurantId];
  if (!menu) return res.status(404).json({ statusCode: 1, error: "Menu not found" });
  res.json(menu);
});

// Serve React frontend from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all for React routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));






