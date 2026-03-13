import express from 'express';
const router = express.Router();

// ✅ Import models using ES modules
import Lesson from '../models/Lesson.js';
import Quiz from '../models/Quiz.js';
import Resource from '../models/Resource.js';

// === LESSON ROUTES ===
router.get('/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/lessons', async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json(lesson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// === QUIZ ROUTES ===
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('lessonId');
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/quizzes', async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// === RESOURCE ROUTES ===
router.get('/resources', async (req, res) => {
  try {
    const resources = await Resource.find().populate('lessonId');
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/resources', async (req, res) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Export router
export default router;
