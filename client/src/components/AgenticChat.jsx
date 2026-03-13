import { useState } from "react";
import { educationAgent, agricultureAgent, healthcareAgent } from "./predefined_queries";

const AgenticChat = () => {
  const [userInput, setUserInput] = useState("");
  const [goal, setGoal] = useState(null);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [language, setLanguage] = useState("en-IN");
  const [category, setCategory] = useState("education");

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => console.log("Speech recognition started...");
    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setUserInput(voiceText);
    };
    recognition.onerror = (event) => console.error("Speech recognition error:", event.error);
    recognition.onspeechend = () => console.log("Speech recognition ended.");

    recognition.start();
  };

  const fallbackOfflineAnswer = async (input) => {
    const lower = input.toLowerCase();
    if (category === "education") return educationAgent(lower);
    if (category === "agriculture") return agricultureAgent(lower);
    if (category === "healthcare") return healthcareAgent(lower);
    return "⚠️ Sorry, I couldn't find relevant information offline. Try connecting to the internet.";
  };

  const sendToBackend = async (input, currentGoal, category) => {
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, currentGoal, category }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      return data.response;
    } catch (error) {
      console.error("Error sending to backend:", error);
      return "⚠️ Unable to reach the server. Please check your connection or try again later.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmedInput }]);

    if (!navigator.onLine) {
      const offlineResponse = await fallbackOfflineAnswer(trimmedInput);
      setMessages((prev) => [...prev, { from: "bot", text: offlineResponse }]);
      setUserInput("");
      return;
    }

    if (!goal) {
      const response = await sendToBackend(trimmedInput, null, category);
      const newSteps = response.split("\n").filter((line) => /^\d+\./.test(line.trim()));

      if (newSteps.length === 0) {
        setMessages((prev) => [...prev, { from: "bot", text: "⚠️ Couldn't generate a plan. Try a different goal." }]);
        return;
      }

      setGoal(trimmedInput);
      setSteps(newSteps);
      setStepIndex(0);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "🎯 Goal set: " + trimmedInput },
        { from: "bot", text: "📋 Here's your plan:\n" + newSteps.join("\n") },
        { from: "bot", text: "👉 Start with this:\n" + newSteps[0] }
      ]);
    } else if (["done", "next", "completed"].includes(trimmedInput.toLowerCase())) {
      const next = stepIndex + 1;
      if (next < steps.length) {
        setStepIndex(next);
        setMessages((prev) => [...prev, { from: "bot", text: "✅ Next step:\n" + steps[next] }]);
      } else {
        setMessages((prev) => [...prev, { from: "bot", text: "🎉 You've completed the plan! Want to set a new goal?" }]);
        setGoal(null);
        setSteps([]);
        setStepIndex(0);
      }
    } else {
      const response = await sendToBackend(trimmedInput, goal, category);
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    }

    setUserInput("");
  };

  return (
    <div className="fixed right-6 bottom-6 w-full max-w-md z-50 md:max-w-sm">
      {/* Language Selector */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Language</label>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="en-IN">English (India)</option>
          <option value="hi-IN">Hindi</option>
          <option value="mr-IN">Marathi</option>
          <option value="gu-IN">Gujarati</option>
        </select>
      </div>

      {/* Category Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="w-full p-2 border rounded text-sm"
        >
          <option value="education">Education</option>
          <option value="agriculture">Agriculture</option>
          <option value="healthcare">Healthcare</option>
        </select>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-4">
        <h2 className="text-lg font-bold mb-3 text-center">🌾📚🩺 SevaBot</h2>

        <div className="bg-gray-100 p-3 rounded h-60 overflow-y-auto mb-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg.from === "user" ? "text-right" : "text-left"}`}
            >
              <span className="block font-semibold">
                {msg.from === "user" ? "🧑‍🌾 You" : "🤖 Bot"}
              </span>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type or speak..."
            className="flex-1 p-2 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
          <button
            type="button"
            onClick={startListening}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-200"
          >
            🎤
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgenticChat;
