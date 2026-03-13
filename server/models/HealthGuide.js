import mongoose from 'mongoose';

const HealthGuideSchema = new mongoose.Schema({
  guideId: String,
  title: String,
  category: String,
  content: String, // or URL
  language: String
});

const HealthGuide = mongoose.model('HealthGuide', HealthGuideSchema);
export default HealthGuide;