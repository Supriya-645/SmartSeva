import mongoose from 'mongoose';

const ImmunizationSchema = new mongoose.Schema({
  childId: String,
  name: String,
  dob: Date,
  reminders: [
    {
      vaccine: String,
      dueDate: Date,
      status: String // "pending" or "done"
    }
  ]
});

const Immunization = mongoose.model('Immunization', ImmunizationSchema);
export default Immunization;