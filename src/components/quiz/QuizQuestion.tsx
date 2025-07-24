import React from 'react';
import { motion } from 'framer-motion';

interface QuizQuestionProps {
  question: {
    id: number;
    question: string;
    options: { value: string; label: string; points: number }[];
    category: string;
  };
  selectedAnswer: string;
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  selectedAnswer, 
  onAnswer 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
          {question.category}
        </span>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={option.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onAnswer(option.value)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedAnswer === option.value
                ? 'border-green-500 bg-green-50 text-green-800'
                : 'border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === option.value
                    ? 'border-green-500 bg-green-500'
                    : 'border-gray-300'
                }`}
              >
                {selectedAnswer === option.value && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;