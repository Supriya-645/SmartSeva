import express from 'express';
const router = express.Router();

import CropCalendar from '../models/CropCalendar.js';

// Filter crops by harvestingMonth and region
router.get('/filter', async (req, res) => {
  try {
    const { harvestingMonth, region } = req.query;

    console.log("Received request with:", { harvestingMonth, region });

    if (!harvestingMonth || !region) {
      return res.status(400).json({ message: 'Both harvestingMonth and region are required' });
    }

    // Trim values for clean query
    const crops = await CropCalendar.find({
      harvestingMonth: harvestingMonth.trim(),
      region: region.trim()
    }).select('cropName sowingMonth notes');

    console.log("Found crops:", crops.length);

    if (crops.length === 0) {
      return res.status(200).json({ message: 'No crops found for the selected filters.', crops: [] });
    }

    res.status(200).json({ crops });
  } catch (err) {
    console.error("Error in /filter:", err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Bulk insert crop data
router.post('/bulk', async (req, res) => {
  try {
    const data = req.body; // expecting an array of crop objects
    const inserted = await CropCalendar.insertMany(data);
    res.status(201).json(inserted);
  } catch (err) {
    console.error("Bulk insert error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

export default router;
