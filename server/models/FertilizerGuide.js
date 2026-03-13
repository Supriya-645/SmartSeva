import mongoose from 'mongoose';

const fertilizerGuideSchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true,
  },
  fertilizerType: {
    type: String,
    required: true,
  },
  quantityPerAcre: {
    type: String,
    required: true,
  },
  applicationTime: {
    type: String, // e.g. "Before Sowing", "After Germination"
    required: true,
  },
  tips: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const FertilizerGuide = mongoose.model('FertilizerGuide', fertilizerGuideSchema);
export default FertilizerGuide  ;
