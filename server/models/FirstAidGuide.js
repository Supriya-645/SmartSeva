import mongoose from 'mongoose';

const FirstAidGuideSchema = new mongoose.Schema({
  guideId: String,
  title: String,
  content: String,
  category: String
});

const FirstAidGuide = mongoose.model('FirstAidGuide', FirstAidGuideSchema);
export default FirstAidGuide;