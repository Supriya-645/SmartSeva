import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import FeatureCard from './FeatureCard';
import { decryptData } from '../utils/encryption'; // ✅ Add this line

export default function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const encryptedName = localStorage.getItem('smartseva_user_name'); // ✅ use correct key
    if (encryptedName) {
      try {
        const decrypted = decryptData(encryptedName); // ✅ decrypt it
        setName(decrypted);
      } catch (err) {
        console.error('Failed to decrypt user name:', err);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-violet-50 dark:bg-violet-900 text-violet-800 dark:text-pink-100">
      <Navbar />
      <main className="flex-1 p-6 overflow-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                {name ? `Welcome ${name}, how can we help you?` : 'Welcome to Project Dashboard'}
              </h1>
              <p className="text-lg mb-6">
                Quick search, personalized recommendations, and adaptive workflows—all in one place.
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-pink-600 rounded-lg hover:bg-pink-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://igrownews.com/wp-content/uploads/2023/11/india-agriculture.jpg"
                alt="Dashboard Hero"
                className="w-full h-64 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-6">Core Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                title="Education"
                description="Offline lessons, quizzes, certificate generation & downloadable content."
                icon="📚"
                onClick={() => navigate('/education')}
              />
              <FeatureCard
                title="Healthcare"
                description="Access health records, get nearby help and offline awareness modules."
                icon="🏥"
                onClick={() => navigate('/healthcare')}
              />
              <FeatureCard
                title="Agriculture"
                description="Crop disease diagnosis, farming tips & agri tools offline and online."
                icon="🌾"
                onClick={() => navigate('/agriculture')}
              />
            </div>
          </div>
        </section>

        {/* Dashboard Overview */}
        <section className="mb-12">
          <div className="max-w-5xl mx-auto bg-pink dark:bg-pink-800 rounded-2xl p-6 shadow">
            <h3 className="text-2xl font-bold mb-2">Dashboard Overview</h3>
            <p>Put charts, stats, or recent activity here.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pink-100 dark:bg-pink-800 border-t dark:border-gray-700 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-bold text-lg mb-2">SMARTSEVA</div>
            <p className="text-sm">© {new Date().getFullYear()} SMARTSEVA. All rights reserved.</p>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="font-semibold mb-1">Product</div>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Updates</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1">Company</div>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1">Support</div>
              <ul className="text-sm space-y-1">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
