import React from 'react';

export default function FeatureCard({ title, description, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[280px] cursor-pointer w-full"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h4 className="text-2xl font-semibold mb-2">{title}</h4>
      <p className="text-base text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm hover:underline">
        Learn more →
      </div>
    </div>
  );
}