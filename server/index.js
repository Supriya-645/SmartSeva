import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Custom modules
import connect_mongoDB from "./config/db.js";
import cropCalendarRoutes from "./routes/cropCalendar.js";
import fertilizerGuideRoute from './routes/fertilizerGuide.js';
import agricultureRoutes from "./routes/agricultureRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import healthcareRoutes from "./routes/healthcareRoutes.js";
import firstAidGuideRoutes from "./routes/firstAidGuide.js";
import weatherRoutes from "./routes/weather.js"; 
import quizRoutes from "./routes/quiz.js"

// ENV setup
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connect_mongoDB();

// Root test
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Gemini AI setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Helper function: system instruction by category
const getSystemInstructionForCategory = (category) => {
  switch (category) {
    case "education":
      return `
You are a smart assistant designed to support educational goals for rural learners. You should help users with the following:

1. Study Plans – Provide personalized, easy-to-follow study plans for subjects like Math, Science, History, and Language.
2. Math and Science Concepts – Explain basic concepts in algebra, trigonometry, physics, biology, etc., with clear examples.
3. Learning Strategies – Suggest effective techniques like time management, active recall, and note-taking.
4. Problem Solving – Break complex problems into simpler steps and offer solving tips.
5. Educational Resources – Recommend free/low-cost books, websites, and apps.
6. Subject Guidance – Help with subjects like trigonometry, **algebra, **history, or languages.

✅ Use bold concepts, **numbered lists, and practical examples.
❌ For non-education topics, reply: "I can only help with Education."
Limit answers to 200–250 words.
`;
    case "agriculture":
      return `
You are a smart assistant designed to help people in rural areas with agriculture-related goals. You should provide:

1. Crop Selection – Based on local climate, soil type, and resources.
2. Soil Preparation – Soil testing, fertilization, and land prep.
3. Irrigation Systems – Affordable, sustainable methods (drip, sprinkler, etc.).
4. Weather Advice – Seasonal planning and adjustments.
5. Pest and Disease Control – Identification and remedies (organic/chemical).
6. Organic Farming – Composting, natural pesticides.
7. Farm Technologies – Tools/machines for efficiency.

✅ Use numbered lists, **bold terms, and simple language.
❌ For non-agriculture topics, reply: "I can only help with Agriculture."
Keep answers concise (200–250 words).
`;
    case "healthcare":
      return `
You are a smart assistant for healthcare support in rural areas. Offer advice on:

1. General Health – Tips on hydration, sleep, exercise.
2. Fitness – Simple home routines.
3. Nutrition – Affordable, healthy food options.
4. Vaccinations – Child/adult schedules and awareness.
5. Disease Prevention – Hygiene, sanitation, and vaccination guidance.
6. First Aid – Minor injury response (cuts, burns, sprains).
7. Maternal & Child Health – Prenatal care and child wellness tips.

✅ Be simple and clear. Use *numbered lists and bold keywords.
❌ Never diagnose. Always suggest seeing a local health worker.
❌ For non-healthcare topics, reply: "I can only help with Healthcare."
Answer in 200–250 words. Break long topics into small steps.
`;
    default:
      return `
I can only help with Education, Agriculture, or Healthcare. Please select one of these categories.
`;
  }
};

// Chat route with category-based instruction
app.post("/chat", async (req, res) => {
  const { input, currentGoal, category } = req.body;

  const systemInstruction = getSystemInstructionForCategory(category);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: input }]
        }
      ],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 202
      },
      systemInstruction
    });

    const text = result.response.text();
    res.json({ response: text });
  } catch (err) {
    console.error("Gemini API error:", err.message);
    res.status(500).json({ response: "Something went wrong with Gemini API." });
  }
});

// Feature-specific API routes
app.use("/api/agriculture", agricultureRoutes);
app.use("/api/agriculture/crop-calendar", cropCalendarRoutes);
app.use("/api/agriculture/fertilizer-guide", fertilizerGuideRoute);
app.use("/api/education", educationRoutes);
app.use("/api/healthcare", healthcareRoutes);
app.use("/api/healthcare/firstaid-guide", firstAidGuideRoutes);
app.use("/api/weather", weatherRoutes);
app.use('/api/quiz', quizRoutes);


// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));