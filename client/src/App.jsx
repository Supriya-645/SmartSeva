import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signin from './components/SignIn';
import Dashboard from './components/Dashboard';
import Education from './pages/education';
import Healthcare from './pages/healthcare';
import Agriculture from './pages/agriculture';
import CertificateGeneration from './pages/certificategeneration';
import CropCalendar from './pages/cropcalendar';
import FertilizerGuide from './pages/FertilizerGuide';
import OfflineFirstAid from './pages/OfflineFirstAid';
import WeatherAlerts from './pages/WeatherAlerts';
import LocalQuizzes from './pages/LocalQuizzes';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/education" element={<Education />} /> 
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/education/certificate-generation" element={<CertificateGeneration />} />
        <Route path="/agriculture/crop-calendar" element={<CropCalendar />} />
        <Route path="/agriculture/fertilizer-guide" element={<FertilizerGuide />} />
        <Route path="/healthcare/offline-first-aid" element={<OfflineFirstAid />} />
        <Route path="/agriculture/weather-alerts" element={<WeatherAlerts />} />
        <Route path="/education/local-quizzes" element={<LocalQuizzes />} />
      </Routes>
  );
}

export default App;
