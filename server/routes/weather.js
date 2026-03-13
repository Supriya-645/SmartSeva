import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config(); // ✅ Load the .env file here

const router = express.Router();

// ✅ Use environment variables
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

// Supported languages by the API
const supportedLanguages = [
  "sq", "af", "ar", "az", "eu", "be", "bg", "ca", "zh_cn", "zh_tw", "hr", "cz", 
  "da", "nl", "en", "fi", "fr", "gl", "de", "el", "he", "hi", "hu", "is", "id", 
  "it", "ja", "kr", "ku", "la", "lt", "mk", "no", "fa", "pl", "pt", "pt_br", "ro", 
  "ru", "sr", "sk", "sl", "es", "sv", "th", "tr", "uk", "vi", "zu"
];


router.get("/location", async (req, res) => {
  const { lat, lon, place, lang = "en" } = req.query;

  // Validate if either lat & lon or place are provided
  if ((!lat || !lon) && !place) {
    return res.status(400).json({
      error: "Either latitude/longitude or place name is required.",
    });
  }

  // Validate language, default to "en" if invalid
  const language = supportedLanguages.includes(lang) ? lang : "en";

  let apiUrl = "https://weather-api167.p.rapidapi.com/api/weather/forecast";
  let params = { cnt: "3", units: "standard", type: "three_hour", mode: "json", lang: language };

  // If place is provided, prioritize it and don't use lat/lon
  if (place) {
    params.place = place;
  } else if (lat && lon) {
    // If no place, use lat/lon coordinates
    params.lat = lat;
    params.lon = lon;
  }

  const options = {
    method: "GET",
    url: apiUrl,
    params: params,
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": "weather-api167.p.rapidapi.com",
      Accept: "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;

    const forecastList = data.list || [];
    if (!forecastList.length) {
      return res.status(404).json({ error: "No forecast data found." });
    }

    const forecast = forecastList[0];
    const tempK = forecast.main.temprature;  // In Kelvin from the API
    const tempC = tempK ? tempK - 273.15 : 0;  // Convert to Celsius, handle missing data
    const humidity = forecast.main.humidity;
    const windSpeed = forecast.wind.speed;

    // Check if any forecast contains rain
    let rainAlert = false;
    for (const f of forecastList) {
      const main = f.weather?.[0]?.main?.toLowerCase();
      if (main?.includes("rain")) {
        rainAlert = true;
        break;
      }
    }

    // Language-based messages
    const messages = {
      en: {
        temperature: `🌡️ Current temperature is ${tempC.toFixed(1)}°C.`,
        humidity: `💧 Humidity is at ${humidity}%.`,
        wind: `🌬️ Wind speed is ${windSpeed} m/s.`,
        rain: rainAlert
          ? "🌧️ Rain expected soon. Please take precautions."
          : "☀️ No rain expected soon.",
      },
      hi: {
        temperature: `🌡️ वर्तमान तापमान ${tempC.toFixed(1)}°C है।`,
        humidity: `💧 आर्द्रता ${humidity}% है।`,
        wind: `🌬️ हवा की गति ${windSpeed} मी/से है।`,
        rain: rainAlert
          ? "🌧️ जल्द ही बारिश की संभावना है। कृपया सावधानी बरतें।"
          : "☀️ निकट भविष्य में बारिश की संभावना नहीं है।",
      },
      mr: {
        temperature: `🌡️ सध्याचे तापमान ${tempC.toFixed(1)}°C आहे.`,
        humidity: `💧 आर्द्रता ${humidity}% आहे.`,
        wind: `🌬️ वारा वेग ${windSpeed} मी/से आहे.`,
        rain: rainAlert
          ? "🌧️ लवकरच पावसाची शक्यता आहे. कृपया काळजी घ्या."
          : "☀️ लवकरच पाऊस पडण्याची शक्यता नाही.",
      },
    };

    res.json({
      location: place || "Unknown Location", // If place is not provided, show unknown location
      rainAlert,
      messagesEN: messages.en,
      messagesHI: messages.hi,
      messagesMR: messages.mr,
    });
  } catch (err) {
    console.error(err.message);
    if (err.response) {
      console.error("API Error:", err.response.data);
    }
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export default router;
