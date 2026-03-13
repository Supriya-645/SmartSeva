import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // shadcn button

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="flex items-center gap-4">
        <div className="text-xl font-bold">SMARTSEVA</div>
        <nav className="hidden md:flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Settings</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden sm:inline-block px-3 py-1 border rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none"
        />
      </div>
    </header>
  );
}
