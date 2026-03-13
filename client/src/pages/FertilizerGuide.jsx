import React, { useState } from 'react';
import axios from 'axios';
import { Leaf } from 'lucide-react'; // Optional icon

export default function FertilizerGuide() {
  const [crop, setCrop] = useState('');
  const [guide, setGuide] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/agriculture/fertilizer-guide?cropName=${crop}`);
      if (res.data && res.data.length > 0) {
        setGuide(res.data[0]);
        setError('');
      } else {
        setGuide(null);
        setError('No guide found for the given crop.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-gray-800 p-8">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 px-8 rounded-xl shadow-lg flex items-center gap-3 mb-8">
        <Leaf className="w-8 h-8 text-white" />
        <h1 className="text-3xl font-bold">Fertilizer Guide</h1>
      </header>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
        <input
          type="text"
          placeholder="Enter crop name (e.g., Wheat)"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="w-full md:w-96 p-4 rounded-xl border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-md"
        >
          Search
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="text-red-600 text-center text-lg font-medium">{error}</div>
      )}

      {/* Output Section */}
      {guide && (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-4 border border-green-200">
          <h2 className="text-2xl font-semibold text-green-800">Crop: {guide.crop}</h2>
          <p className="text-lg"><span className="font-semibold text-green-700">Fertilizer Type:</span> {guide.fertilizerType}</p>
          <p className="text-lg"><span className="font-semibold text-green-700">Quantity per Acre:</span> {guide.quantityPerAcre}</p>
          <p className="text-lg"><span className="font-semibold text-green-700">Application Time:</span> {guide.applicationTime}</p>
          <p className="text-lg"><span className="font-semibold text-green-700">Tips:</span> {guide.tips}</p>
        </div>
      )}
    </div>
  );
}
