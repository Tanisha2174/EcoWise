import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, BookmarkCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface Tip {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  impact: 'low' | 'medium' | 'high';
  steps?: string[];
}

interface TipCardProps {
  tip: Tip;
  isBookmarked: boolean;
  onBookmark: () => void;
}

const TipCard: React.FC<TipCardProps> = ({ tip, isBookmarked, onBookmark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-purple-100 text-purple-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'home': return 'bg-indigo-100 text-indigo-800';
      case 'food': return 'bg-green-100 text-green-800';
      case 'travel': return 'bg-blue-100 text-blue-800';
      case 'fashion': return 'bg-pink-100 text-pink-800';
      case 'energy': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{tip.icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {tip.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tip.category)}`}>
                  {tip.category}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onBookmark}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isBookmarked 
                ? 'text-yellow-600 hover:text-yellow-700' 
                : 'text-gray-400 hover:text-yellow-600'
            }`}
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-5 w-5" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {tip.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tip.difficulty)}`}>
            {tip.difficulty} level
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(tip.impact)}`}>
            {tip.impact} impact
          </span>
        </div>

        {/* Expandable Steps */}
        {tip.steps && tip.steps.length > 0 && (
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-left text-green-600 hover:text-green-700 font-medium mb-2"
            >
              <span>How to implement</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <div className="bg-gray-50 rounded-lg p-4">
                <ol className="space-y-2">
                  {tip.steps.map((step, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TipCard;