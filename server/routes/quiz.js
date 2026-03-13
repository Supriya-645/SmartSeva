import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

const validDifficulties = ['easy', 'medium', 'hard'];

router.get('/', async (req, res) => {
  const { category, difficulty, limit } = req.query;

  if (!category || !limit) {
    return res.status(400).json({ message: 'Please provide category and number of questions (limit).' });
  }

  if (difficulty && !validDifficulties.includes(difficulty.toLowerCase())) {
    return res.status(422).json({ message: `Invalid difficulty. Choose one of: ${validDifficulties.join(', ')}` });
  }

  try {
    const response = await axios.get('https://quizapi.io/api/v1/questions', {
      headers: {
        'X-Api-Key': process.env.QUIZAPI_API_KEY,
      },
      params: {
        category,
        difficulty,
        limit,
      },
    });

    const questions = response.data.map((q) => {
      const options = Object.entries(q.answers)
        .filter(([_, value]) => value !== null)
        .map(([_, value]) => value);

      const correctAnswers = Object.entries(q.correct_answers)
        .filter(([_, val]) => val === 'true')
        .map(([key]) => {
          const answerKey = key.replace('_correct', ''); // e.g., "answer_a"
          return q.answers[answerKey];
        })
        .filter(Boolean); // Remove any nulls

      return {
        text: q.question,
        options,
        answer: correctAnswers[0] || null, // Return the first correct answer only
        // If you want multiple correct answers instead:
        // answers: correctAnswers
      };
    });

    res.json({ questions });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ message: 'Error fetching quiz questions.' });
  }
});

export default router;
