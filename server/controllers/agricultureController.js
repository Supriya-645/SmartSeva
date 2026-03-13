const CropCalendar = require('../models/CropCalendar');
const FertilizerGuide = require('../models/FertilizerGuide');
const WeatherAlert = require('../models/WeatherAlert');

// Get all crop calendar entries
exports.getCropCalendar = async (req, res) => {
  try {
    const data = await CropCalendar.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new crop calendar
exports.addCropCalendar = async (req, res) => {
  const newEntry = new CropCalendar(req.body);
  try {
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all Weather alert entries
exports.getWeatherAlert = async (req, res) => {
  try {
    const data = await WeatherAlert.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new weather alert 
exports.addWeatherAlert = async (req, res) => {
  const newEntry = new WeatherAlert(req.body);
  try {
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all fertilizer guide entries
exports.getFertilizerGuide = async (req, res) => {
  try {
    const data = await FertilizerGuide.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new fertilizer guide
exports.addFertilizerGuide = async (req, res) => {
  const newEntry = new FertilizerGuide(req.body);
  try {
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

