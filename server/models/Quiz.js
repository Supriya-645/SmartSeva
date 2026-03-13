import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [{
    question: String,
    options: [String],
    correctAnswer: String
  }],
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }
}, { timestamps: true });

const Quiz = mongoose.model('Quiz', QuizSchema);
export default Quiz;
