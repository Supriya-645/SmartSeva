import express from "express";
const router = express.Router();

// ✅ Use ES module imports
import CropCalendar from "../models/CropCalendar.js";
import WeatherAlert from "../models/WeatherAlert.js";
import FertilizerGuide from "../models/FertilizerGuide.js";

// ---------------- Crop Calendar ----------------

// GET all crop calendars
router.get("/crop-calendar", async (req, res) => {
  try {
    const crops = await CropCalendar.find();
    res.json(crops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new crop calendar entry
router.post("/crop-calendar", async (req, res) => {
  try {
    const newCrop = new CropCalendar(req.body);
    const savedCrop = await newCrop.save();
    res.status(201).json(savedCrop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ---------------- Weather Alerts ----------------

// GET all weather alerts
router.get("/weather-alert", async (req, res) => {
  try {
    const alerts = await WeatherAlert.find();
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new weather alert
router.post("/weather-alert", async (req, res) => {
  try {
    const newAlert = new WeatherAlert(req.body);
    const savedAlert = await newAlert.save();
    res.status(201).json(savedAlert);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ---------------- Fertilizer Guide ----------------

// GET all fertilizer guides
router.get('/fertilizer-guide', async (req, res) => {
  try {
    const { cropName } = req.query;

    if (!cropName) {
      return res.status(400).json({ message: 'cropName query parameter is required.' });
    }

    const guides = await FertilizerGuide.find({ cropName: cropName });

    if (guides.length === 0) {
      return res.status(404).json({ message: 'No guides found for the specified crop.' });
    }

    res.status(200).json(guides);
  } catch (error) {
    console.error('Error fetching fertilizer guides:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// POST a new fertilizer guide
router.post("/fertilizer-guide", async (req, res) => {
  try {
    const newGuide = new FertilizerGuide(req.body);
    const savedGuide = await newGuide.save();
    res.status(201).json(savedGuide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Export using ES Module
export default router;
