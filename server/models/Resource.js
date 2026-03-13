import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  title: String,
  type: String, // video, pdf, etc.
  url: String,
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }
}, { timestamps: true });

const Resource = mongoose.model('Resource', ResourceSchema);
export default Resource;
