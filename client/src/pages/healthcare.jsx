import React from "react";
import { Link } from "react-router-dom";
import AgenticChat from "../components/AgenticChat";

export default function Healthcare() {
  const features = [
    {
      title: "Health Guides",
      desc: "Comprehensive guides on wellness, nutrition, and disease prevention.",
      link: "/healthcare/health-guides",
    },
    {
      title: "Immunization Reminders",
      desc: "Never miss important vaccinations with timely reminders.",
      link: "/healthcare/immunization-reminders",
    },
    {
      title: "Patient Records",
      desc: "Securely store and access your medical history anywhere.",
      link: "/healthcare/patient-records",
    },
    {
      title: "Offline First Aid",
      desc: "Quick reference guides for emergency care without internet.",
      link: "/healthcare/offline-first-aid",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 to-red-100 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-700 text-white py-4 px-8 shadow-md flex justify-between items-center pr-[360px]">
        <div className="text-2xl font-bold">My Dashboard</div>
        <nav className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/healthcare" className="underline font-semibold">Healthcare</a>
          <a href="/profile" className="hover:underline">Profile</a>
        </nav>
      </header>

      {/* Chatbot (Fixed Right Panel) */}
      <div className="hidden lg:block fixed top-0 right-0 h-screen w-[360px] border-l border-red-200 bg-white shadow-lg z-40 pt-20 px-4">
        <div className="flex flex-col h-full">
          <AgenticChat/>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-6 lg:mr-[360px]">
        <section className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">Healthcare</h1>
            <p className="text-lg max-w-md text-gray-700">
              Get health information, reminders, and emergency tips at your fingertips.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="http://www.pngmart.com/files/6/Healthcare-PNG-Picture.png"
              alt="Healthcare Illustration"
              className="max-w-xs md:max-w-md rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white px-6 py-10 rounded-3xl shadow-inner mb-10">
          <h2 className="text-3xl font-bold text-red-900 text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="bg-red-100 p-6 rounded-xl shadow hover:bg-red-200 transition duration-200"
              >
                <h3 className="text-xl font-semibold text-red-700 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-red-800 text-white py-6 px-8 text-center rounded-t-2xl">
          <p className="text-sm">© 2025 HealthHub. All rights reserved.</p>
          <p className="text-sm">Contact: support@healthhub.com</p>
        </footer>
      </div>
    </div>
  );
}
