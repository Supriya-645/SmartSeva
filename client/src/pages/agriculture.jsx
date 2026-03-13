import React from 'react';
import { Link } from 'react-router-dom';
import AgenticChat from '../components/AgenticChat';

export default function Agriculture() {
  const features = [
    {
      title: "Crop Calendar Guides",
      desc: "Localized seasonal calendars to guide sowing, watering, and harvesting schedules.",
      link: "/agriculture/crop-calendar",
    },
    {
      title: "Weather Alerts",
      desc: "Offline weather warnings and seasonal forecasts for farming decisions.",
      link: "/agriculture/weather-alerts",
    },
    {
      title: "Fertilizer & Usage Guide",
      desc: "Recommendations on optimal fertilizers and usage amounts based on soil and crop type.",
      link: "/agriculture/fertilizer-guide",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 text-gray-800 min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-green-600 text-white py-4 px-8 shadow-md flex justify-between items-center pr-[360px]">
        <div className="text-2xl font-bold">My Dashboard</div>
        <nav className="flex gap-6">
          <a href="/education" className="hover:underline">Education</a>
          <a href="/healthcare" className="hover:underline">Healthcare</a>
          <a href="/agriculture" className="underline font-semibold">Agriculture</a>
        </nav>
      </header>

      {/* Chatbot */}
      <div className="hidden lg:block fixed top-0 right-0 h-screen w-[360px] border-l border-green-200 bg-white shadow-lg z-40 pt-20 px-4">
        <div className="flex flex-col h-full">
          <AgenticChat/>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-6 lg:mr-[360px]">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">Agriculture</h1>
            <p className="text-lg max-w-md text-gray-700">
              Empowering farmers with timely, localized information to improve yield and sustainability.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/623/023/original/agriculture-business-logo-template-unique-green-vector-image.jpg"
              alt="Agriculture Illustration"
              className="max-w-xs md:max-w-md"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white px-6 py-10 rounded-3xl shadow-inner mb-10">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                to={feature.link}
                key={index}
                className="bg-green-100 rounded-xl p-6 shadow-lg hover:bg-green-200 transition duration-200"
              >
                <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-700 text-white py-6 px-8 text-center rounded-t-2xl">
          <p className="text-sm">© 2025 RuralConnect | Designed with care for our farming communities</p>
        </footer>
      </div>
    </div>
  );
}
