import mongoose from 'mongoose';

const EmergencyInfoSchema = new mongoose.Schema({
  type: String, // Hospital, Ambulance, Helpline
  contact: String,
  region: String
}, { timestamps: true });

const EmergencyInfo = mongoose.model('EmergencyInfo', EmergencyInfoSchema);
export default EmergencyInfo;
