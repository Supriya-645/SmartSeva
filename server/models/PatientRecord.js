import mongoose from 'mongoose';

const PatientRecordSchema = new mongoose.Schema({
  recordId: String,
  patientName: String,
  age: Number,
  visitDate: Date,
  symptoms: String,
  diagnosis: String,
  treatment: String
});

const PatientRecord = mongoose.model('PatientRecord', PatientRecordSchema);
export default PatientRecord;