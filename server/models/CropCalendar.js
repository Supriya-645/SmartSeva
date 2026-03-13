import mongoose from 'mongoose';

const cropCalendarSchema = new mongoose.Schema(
  {
    cropName: {
      type: String,
      required: true,
    },
    sowingMonth: {
      type: String,
      required: true,
    },
    harvestingMonth: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

// ✅ Use `export default` instead of `module.exports`
const CropCalendar = mongoose.model('CropCalendar', cropCalendarSchema);
export default CropCalendar;
