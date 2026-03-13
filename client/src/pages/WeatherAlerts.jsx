import { useState } from "react";

const WeatherAlerts = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("en");
  const [place, setPlace] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const fetchWeatherByLocation = () => {
    setLoading(true);
    setError("");
    setWeatherData(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude: lat, longitude: lon } = position.coords;

          setLatitude(lat);
          setLongitude(lon);

          fetchWeatherData(lat, lon);
        },
        () => {
          setError("Geolocation failed. Please enter your location name manually.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const fetchWeatherData = async (lat, lon) => {
    if (!lat || !lon) {
      setError("Please provide valid latitude and longitude.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/weather/location?lat=${lat}&lon=${lon}&place=${encodeURIComponent(place)}&lang=${lang}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Weather fetch failed");
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const messages =
    weatherData &&
    (lang === "mr"
      ? weatherData.messagesMR
      : lang === "hi"
      ? weatherData.messagesHI
      : weatherData.messagesEN);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-green-50 shadow-md rounded-lg border border-green-200">
      <div className="flex justify-center mb-4">
        {/* 🌀 Tailwind Logo (replace src path with your actual logo path if needed) */}
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-center text-green-800">
        🌤 Get Weather for Your Location
      </h3>

      <div className="mb-4">
        <label htmlFor="lang-select" className="block text-sm font-medium text-green-700 mb-1">
          Select Language:
        </label>
        <select
          id="lang-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="w-full px-3 py-2 border border-green-300 rounded-md bg-white"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="place-input" className="block text-sm font-medium text-green-700 mb-1">
          Enter your location (e.g. Nashik):
        </label>
        <input
          type="text"
          id="place-input"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter location name"
          className="w-full px-3 py-2 border border-green-300 rounded-md"
        />
      </div>

      <button
        onClick={fetchWeatherByLocation}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md mb-4"
      >
        Get Weather
      </button>

      {loading && <p className="text-green-600 text-center">Loading weather data...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {weatherData && messages && (
        <div className="bg-white border border-green-200 rounded-md p-4 mt-4 shadow">
          <h4 className="text-lg font-semibold mb-2 text-green-800">
            📍 Location: {weatherData.location}
          </h4>
          <p className="text-gray-800">{messages.temperature}</p>
          <p className="text-gray-800">{messages.humidity}</p>
          <p className="text-gray-800">{messages.wind}</p>
          <p
            className={`mt-2 font-semibold ${
              weatherData.rainAlert ? "text-blue-700" : "text-green-700"
            }`}
          >
            {messages.rain}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherAlerts;