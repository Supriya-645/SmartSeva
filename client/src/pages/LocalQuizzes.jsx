import React, { useState } from 'react';

const categories = [
  'Linux', 'DevOps', 'Networking',
  'Java', 'Cloud', 'Docker', 'JS', 'React', 'Laravel', 'Terraform', 'Python'
];

const difficulties = ['easy', 'medium', 'hard'];

const LocalQuizzes = () => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [limit, setLimit] = useState(5);
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState('');

  const fetchQuiz = async () => {
    if (!category || !limit || limit <= 0) {
      return alert('Please select a topic and a valid number of questions.');
    }

    setLoading(true);
    setError('');
    setFinished(false);
    setQuizData([]);
    setCurrentQ(0);
    setScore(0);

    try {
      const resp = await fetch(
        `http://localhost:5000/api/quiz?category=${encodeURIComponent(category)}&difficulty=${difficulty}&limit=${limit}`
      );
      const body = await resp.json();
      if (resp.ok) {
        if (Array.isArray(body.questions)) {
          setQuizData(body.questions);
        } else {
          setError("Invalid data format from server.");
        }
      } else {
        setError(body.message || 'Error fetching quiz');
      }
    } catch (err) {
      setError('Network error');
    }

    setLoading(false);
  };

  const handleAnswer = (opt) => {
    const correct = quizData[currentQ]?.answer;

    // Improved comparison logic
    const normalize = (str) => str?.trim().toLowerCase();

    if (normalize(opt) === normalize(correct)) {
      setScore((s) => s + 1);
    }

    if (currentQ + 1 < quizData.length) {
      setCurrentQ((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-lg font-sans text-blue-900">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">🎯 Quiz </h1>

      <div className="flex flex-wrap items-center gap-4 mb-6 justify-center">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-md border border-blue-300 bg-white shadow"
        >
          <option value="">-- Select Topic --</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="px-4 py-2 rounded-md border border-blue-300 bg-white shadow"
        >
          {difficulties.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          max="50"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value, 10) || 1)}
          className="w-20 px-3 py-2 rounded-md border border-blue-300 shadow"
        />

        <button
          onClick={fetchQuiz}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Start Quiz
        </button>
      </div>

      {loading && <p className="text-center text-blue-500">Loading quiz...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {finished && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-700">🎉 Quiz Completed!</h2>
          <p className="text-lg mt-2 mb-4">Your Score: {score} / {quizData.length}</p>
          <button
            onClick={fetchQuiz}
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Play Again
          </button>
        </div>
      )}

      {!loading && !finished && quizData.length > 0 && (
        <div>
          <p className="text-lg font-medium mb-4">
            <strong>Q{currentQ + 1}:</strong> {quizData[currentQ]?.text}
          </p>
          <div className="space-y-3">
            {quizData[currentQ]?.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="w-full text-left px-4 py-2 bg-white border border-blue-300 rounded-md shadow hover:bg-blue-100 transition"
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-blue-600 font-medium">
            Progress: {currentQ + 1} / {quizData.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalQuizzes;
