import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import EcoTipsPage from './pages/EcoTipsPage';
import GreenMapPage from './pages/GreenMapPage';
import ChallengesPage from './pages/ChallengesPage';
import ProgressPage from './pages/ProgressPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/tips" element={<EcoTipsPage />} />
            <Route path="/map" element={<GreenMapPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;