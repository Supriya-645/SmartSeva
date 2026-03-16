# SmartSeva

**SmartSeva** is an AI-powered rural empowerment platform built to bridge the digital divide for rural communities in India. It provides intelligent, accessible tools across three critical domains — **Education**, **Agriculture**, and **Healthcare** — with support for both online and offline usage.

---

## Overview

Rural populations often lack access to quality information in areas that matter most. SmartSeva solves this by combining an AI chatbot (powered by Google Gemini), structured data modules, and offline-first features into a single unified platform — usable even in low-connectivity environments.

---

## Features

### Education
- AI-powered study assistant for Math, Science, History, and Languages
- Offline lessons and downloadable educational content
- Interactive local quizzes
- Certificate generation for completed learning milestones

### Agriculture
- AI chatbot for crop selection, soil prep, pest control, and organic farming tips
- Crop calendar for seasonal planning
- Fertilizer guide with crop-specific recommendations
- Real-time weather alerts for farm planning

### Healthcare
- AI health assistant for general wellness, nutrition, and disease prevention
- Offline First Aid guide (accessible without internet)
- Patient records management
- Immunization tracking and maternal & child health support

---

## Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Frontend    | React (Vite), Tailwind CSS, React Router |
| Backend     | Node.js, Express.js                 |
| Database    | MongoDB (Mongoose ODM)              |
| AI          | Google Gemini 2.0 Flash (`@google/generative-ai`) |
| Offline     | LocalForage (IndexedDB-backed caching) |
| Auth/Encryption | Custom AES encryption (client-side) |
| Weather API | RapidAPI                            |
| Quiz API    | QuizAPI                             |

---

## 📁 Project Structure
```
SmartSeva/
├── client/                  # React frontend (Vite)
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Feature pages (Education, Agriculture, Healthcare)
│       ├── lib/             # LocalForage & utility helpers
│       └── utils/           # Encryption utilities
│
└── server/                  # Express backend
    ├── controllers/         # Business logic
    ├── models/              # Mongoose schemas
    ├── routes/              # API route definitions
    └── config/              # Database connection
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Google Gemini API key
- RapidAPI key (for weather)
- QuizAPI key (for quizzes)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/smartseva.git
cd smartseva
```

### 2. Setup the Server
```bash
cd server
npm install
```

Create a `.env` file in `/server`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
RAPIDAPI_KEY=your_rapidapi_key
QUIZAPI_API_KEY=your_quizapi_key
```

Start the server:
```bash
npm start
```

### 3. Setup the Client
```bash
cd client
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔌 API Endpoints

| Method | Endpoint                                | Description                    |
|--------|------------------------------------------|--------------------------------|
| POST   | `/chat`                                  | AI chat (category-aware)       |
| GET    | `/api/agriculture`                       | Agriculture data               |
| GET    | `/api/agriculture/crop-calendar`         | Crop calendar                  |
| GET    | `/api/agriculture/fertilizer-guide`      | Fertilizer recommendations     |
| GET    | `/api/education`                         | Education resources            |
| GET    | `/api/healthcare`                        | Healthcare information         |
| GET    | `/api/healthcare/firstaid-guide`         | First aid guides               |
| GET    | `/api/weather`                           | Weather alerts                 |
| GET    | `/api/quiz`                              | Local quizzes                  |

---

## AI Integration

SmartSeva uses **Google Gemini 2.0 Flash** as its AI backbone. The chatbot operates in one of three category modes — `education`, `agriculture`, or `healthcare` — each with a dedicated system prompt to ensure focused, relevant, and safe responses for rural users.

---

## Offline Support

Several modules are built with an **offline-first** architecture using `LocalForage` (IndexedDB). Key features like the First Aid Guide are available entirely without an internet connection, making SmartSeva reliable in low-connectivity rural environments.

---

## Built At

This project was built as part of a hackathon focused on leveraging technology for social good and rural empowerment.
