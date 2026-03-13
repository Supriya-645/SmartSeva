import React, { useState } from 'react';
import axios from 'axios';
import { ShieldAlert } from 'lucide-react'; // You can change this icon

export default function OfflineFirstAid() {
  const [title, setTitle] = useState('');
  const [guide, setGuide] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/healthcare/firstaid-guide?title=${title}`);
    if (res.data && (Array.isArray(res.data) ? res.data.length > 0 : true)) {
      setGuide(Array.isArray(res.data) ? res.data[0] : res.data);
      setError('');
    } else {
        setGuide(null);
        setError('No guide found for the given title.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-red-200 p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-red-100 text-red-600 p-3 rounded-full">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-red-700">First Aid Lookup</h1>
        </div>

        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search first aid topic (e.g., Bleeding)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-base"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium shadow-sm"
          >
            Find Guide
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 font-medium text-center mb-4">{error}</p>
        )}

        {/* Output Section */}
        {guide && (
          <div className="bg-red-100 border border-red-300 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-red-800">🩺 {guide.title}</h2>
            <p className="text-md">
              <span className="font-semibold text-red-600">Category:</span>{' '}
              {guide.category}
            </p>
            <p className="text-md leading-relaxed">
              <span className="font-semibold text-red-600">Instructions:</span>{' '}
              {guide.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
