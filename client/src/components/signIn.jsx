import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encryptData, decryptData } from '../utils/encryption';

export default function SignIn() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (isSignup && !name)) {
      alert('Please fill all fields');
      return;
    }

    if (isSignup) {
      const encryptedName = encryptData(name);
      const encryptedEmail = encryptData(email);
      const encryptedPassword = encryptData(password);

      localStorage.setItem('smartseva_user_name', encryptedName);
      localStorage.setItem('smartseva_user_email', encryptedEmail);
      localStorage.setItem('smartseva_user_password', encryptedPassword);

      alert('Signup successful! Now logging in...');
    } else {
      const storedEmail = localStorage.getItem('smartseva_user_email');
      const storedPassword = localStorage.getItem('smartseva_user_password');

      if (
        storedEmail &&
        storedPassword &&
        email === decryptData(storedEmail) &&
        password === decryptData(storedPassword)
      ) {
        alert('Login successful!');
      } else {
        alert('Invalid email or password');
        return;
      }
    }

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Left Panel */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-10 shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">SMARTSEVA</h1>
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </h2>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 underline"
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-blue-700 text-white px-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to SMARTSEVA</h2>
          <p className="text-lg leading-relaxed">
            Bringing essential services to every village — anytime, anywhere. <br />
            Access education, healthcare, and agriculture support offline through intelligent AI-powered modules.
          </p>
        </div>
      </div>
    </div>
  );
}
