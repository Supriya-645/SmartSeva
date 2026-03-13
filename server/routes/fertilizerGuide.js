import express from 'express';
import FertilizerGuide from '../models/FertilizerGuide.js';

const router = express.Router();

router.get('/:cropName', async (req, res) => {
  try {
    const data = await Fertilizer.findOne({ cropName: req.params.cropName });
    if (!data) {
      return res.status(404).json({ error: 'Fertilizer guide not found' });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;