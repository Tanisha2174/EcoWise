import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, TrendingUp, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuizResultProps {
  score: number;
  onReset: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, onReset }) => {
  const getScoreCategory = (score: number) => {
    if (score >= 80) return { label: 'Eco Champion', color: 'text-green-600', icon: Award };
    if (score >= 60) return { label: 'Green Warrior', color: 'text-blue-600', icon: Leaf };
    if (score >= 40) return { label: 'Eco Explorer', color: 'text-yellow-600', icon: TrendingUp };
    return { label: 'Getting Started', color: 'text-orange-600', icon: TrendingUp };
  };

  const category = getScoreCategory(score);
  const IconComponent = category.icon;

  const recommendations = [
    { score: 80, text: "Amazing! You're already living very sustainably. Share your knowledge with others!" },
    { score: 60, text: "Great job! You're on the right track. Focus on energy efficiency and transportation." },
    { score: 40, text: "Good start! Consider reducing waste and exploring renewable energy options." },
    { score: 0, text: "Everyone starts somewhere! Small changes can make a big difference." }
  ];

  const recommendation = recommendations.find(r => score >= r.score)?.text || recommendations[recommendations.length - 1].text;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 text-center"
        >
          {/* Score Display */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mb-6`}
            >
              <IconComponent className={`h-16 w-16 ${category.color}`} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {score}%
              </h1>
              <h2 className={`text-2xl font-semibold ${category.color} mb-4`}>
                {category.label}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {recommendation}
              </p>
            </motion.div>
          </div>

          {/* Score Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 rounded-lg p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Your Sustainability Score Breakdown
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/tips"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Get Eco Tips
            </Link>
            <Link
              to="/challenges"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Take Challenges
            </Link>
            <button
              onClick={onReset}
              className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retake Quiz</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Link
            to="/progress"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 text-center"
          >
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Track Progress</h3>
            <p className="text-sm text-gray-600">Monitor your sustainability journey</p>
          </Link>
          
          <Link
            to="/map"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 text-center"
          >
            <Leaf className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Green Map</h3>
            <p className="text-sm text-gray-600">Find eco-friendly locations nearby</p>
          </Link>
          
          <Link
            to="/tips"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 text-center"
          >
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Eco Tips</h3>
            <p className="text-sm text-gray-600">Learn sustainable practices</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizResult;