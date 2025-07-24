import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock, Target } from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  category: string;
  tips?: string[];
}

interface ChallengeCardProps {
  challenge: Challenge;
  isCompleted: boolean;
  onToggle: () => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ 
  challenge, 
  isCompleted, 
  onToggle 
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'energy': return 'bg-blue-100 text-blue-800';
      case 'waste': return 'bg-green-100 text-green-800';
      case 'transport': return 'bg-purple-100 text-purple-800';
      case 'food': return 'bg-orange-100 text-orange-800';
      case 'water': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden ${
        isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-100'
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`text-lg font-semibold mb-2 ${
              isCompleted ? 'text-green-800' : 'text-gray-800'
            }`}>
              {challenge.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(challenge.category)}`}>
                {challenge.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 flex items-center">
                <Target className="h-3 w-3 mr-1" />
                {challenge.points} pts
              </span>
            </div>
          </div>
          
          <button
            onClick={onToggle}
            className={`p-2 rounded-full transition-all duration-200 ${
              isCompleted
                ? 'text-green-600 hover:text-green-700 bg-green-100'
                : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
            }`}
          >
            {isCompleted ? (
              <CheckCircle className="h-8 w-8" />
            ) : (
              <Circle className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Description */}
        <p className={`mb-4 leading-relaxed ${
          isCompleted ? 'text-green-700' : 'text-gray-600'
        }`}>
          {challenge.description}
        </p>

        {/* Tips */}
        {challenge.tips && challenge.tips.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              Tips to get started:
            </h4>
            <ul className="space-y-1">
              {challenge.tips.map((tip, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Completion Status */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-green-100 border border-green-200 rounded-lg p-3"
          >
            <div className="flex items-center text-green-800">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Challenge Completed!</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ChallengeCard;