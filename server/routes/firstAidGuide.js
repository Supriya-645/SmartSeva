import express from 'express';
import FirstAidGuide from '../models/FirstAidGuide.js';

const router = express.Router();

// GET /api/firstaid/:title
router.get('/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const guide = await FirstAidGuide.findOne({ title });

    if (!guide) {
      return res.status(404).json({ error: 'First aid guide not found' });
    }

    res.json(guide);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
