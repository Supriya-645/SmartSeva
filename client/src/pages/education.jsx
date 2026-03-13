import React from "react";
import { Link } from "react-router-dom";
import AgenticChat from "../components/AgenticChat";

export default function Education() {
  const features = [
    {
      title: "Offline Lesson Viewer",
      desc: "Access lessons without internet connectivity for uninterrupted learning.",
      link: "/education/offline-lessons",
    },
    {
      title: "Local Quizzes",
      desc: "Attempt interactive quizzes and track your progress locally.",
      link: "/education/local-quizzes",
    },
    {
      title: "Certificate Generation",
      desc: "Get recognized for your achievements with auto-generated certificates.",
      link: "/education/certificate-generation",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-700 text-white py-4 px-8 shadow-md flex justify-between items-center pr-[360px]">
        <div className="text-2xl font-bold">My Dashboard</div>
        <nav className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/education" className="underline font-semibold">Education</a>
          <a href="/profile" className="hover:underline">Profile</a>
        </nav>
      </header>

      {/* Chatbot */}
      <div className="hidden lg:block fixed top-0 right-0 h-screen w-[360px] border-l border-blue-200 bg-white shadow-lg z-40 pt-20 px-4">
        <div className="flex flex-col h-full">
          <AgenticChat />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-6 lg:mr-[360px]">
        <section className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">Education</h1>
            <p className="text-lg max-w-md text-gray-700">
              Learn anytime, anywhere with interactive lessons and assessments.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="Education"
              className="max-w-xs md:max-w-md"
            />
          </div>
        </section>

        <section className="bg-white px-6 py-10 rounded-3xl shadow-inner mb-10">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="bg-blue-100 rounded-xl p-6 shadow-lg hover:bg-blue-200 transition duration-200"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="bg-blue-800 text-white py-6 px-8 text-center rounded-t-2xl">
          <p className="text-sm">© 2025 EduPro. All rights reserved.</p>
          <p className="text-sm">Contact: support@edupro.com</p>
        </footer>
      </div>
    </div>
  );
}
