import mongoose from 'mongoose';

const weatherAlertSchema = new mongoose.Schema({
  region: {
    type: String,
    required: true,
  },
  alertType: {
    type: String, // e.g. "Storm", "Rainfall", "Heatwave"
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  validUntil: {
    type: Date,
    required: true,
  }
}, { timestamps: true });

const WeatherAlert = mongoose.model('WeatherAlert', weatherAlertSchema);
export default WeatherAlert;
