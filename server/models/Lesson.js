import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  title: String,
  subject: String,
  content: String,
  language: String,
  level: String
}, { timestamps: true });

const Lesson = mongoose.model('Lesson', LessonSchema);
export default Lesson;
