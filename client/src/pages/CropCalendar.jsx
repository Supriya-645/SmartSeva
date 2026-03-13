import React, { useState } from 'react';
import axios from 'axios';
import { FaLeaf } from 'react-icons/fa';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function CropCalendar() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [region, setRegion] = useState('');
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchCrops = async () => {
    if (!selectedMonth || !region.trim()) {
      setErrorMsg('Please select both month and region.');
      return;
    }

    setErrorMsg('');
    try {
      setLoading(true);
      const response = await axios.get('/api/agriculture/crop-calendar/filter', {
        params: {
          harvestingMonth: selectedMonth,
          region: region.trim()
        }
      });

      console.log("✅ Response from backend:", response.data); // <-- Debug
      setFilteredCrops(response.data.crops || []);

    } catch (error) {
      console.error('❌ Error fetching crops:', error);
      setErrorMsg('Something went wrong while fetching crops.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/bg-green.jpg')] bg-cover bg-center blur-sm brightness-90"></div>

      <div className="relative z-10 px-4 py-10 sm:px-8 lg:px-20 min-h-screen bg-white/40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 flex items-center justify-center gap-3">
              <FaLeaf className="text-green-600" />
              Crop Calendar
            </h1>
            <p className="text-green-700 text-lg mt-2">
              Discover which crops you can harvest based on season and region.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-green-900 font-medium mb-2">
                Select Harvesting Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
              >
                <option value="">-- Choose a Month --</option>
                {months.map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-green-900 font-medium mb-2">
                Enter Region
              </label>
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="e.g. Maharashtra, Punjab"
                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
              />
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <button
              onClick={fetchCrops}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition duration-300"
            >
              🌾 Find Suitable Crops
            </button>
          </div>

          {errorMsg && (
            <div className="text-center text-red-600 mb-6 font-medium">
              {errorMsg}
            </div>
          )}

          {loading ? (
            <p className="text-center text-green-700 text-xl font-semibold animate-pulse">
              🌱 Fetching crops...
            </p>
          ) : filteredCrops.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCrops.map((crop) => (
                <div
                  key={crop._id}
                  className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold text-green-800 mb-2">{crop.cropName}</h3>
                  <p><strong>🌱 Sowing:</strong> {crop.sowingMonth}</p>
                  {crop.notes && (
                    <p className="text-sm text-gray-600 italic mt-2">“{crop.notes}”</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            selectedMonth &&
            region &&
            !loading &&
            <p className="text-center text-gray-600 italic text-lg">
              No crops found for the selected month and region.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
