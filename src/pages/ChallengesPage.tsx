import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, CheckCircle, Circle, Award, TrendingUp } from 'lucide-react';
import ChallengeCard from '../components/challenges/ChallengeCard';
import { weeklyeChallenges, Challenge } from '../utils/challengesData';

const ChallengesPage: React.FC = () => {
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  useEffect(() => {
    const saved = localStorage.getItem('completedChallenges');
    if (saved) {
      setCompletedChallenges(JSON.parse(saved));
    }
  }, []);

  const toggleChallenge = (challengeId: string) => {
    const updatedCompleted = completedChallenges.includes(challengeId)
      ? completedChallenges.filter(id => id !== challengeId)
      : [...completedChallenges, challengeId];
    
    setCompletedChallenges(updatedCompleted);
    localStorage.setItem('completedChallenges', JSON.stringify(updatedCompleted));
  };

  const currentWeekChallenges = weeklyeChallenges.find(week => week.week === selectedWeek);
  const totalChallenges = weeklyeChallenges.reduce((acc, week) => acc + week.challenges.length, 0);
  const completedCount = completedChallenges.length;
  const completionRate = Math.round((completedCount / totalChallenges) * 100);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Eco Challenges
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take on weekly sustainability challenges to build eco-friendly habits 
            and make a positive impact on the environment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{completedCount}</h3>
            <p className="text-gray-600">Challenges Completed</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{completionRate}%</h3>
            <p className="text-gray-600">Completion Rate</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{weeklyeChallenges.length}</h3>
            <p className="text-gray-600">Weeks Available</p>
          </div>
        </div>

        {/* Week Selector */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-green-600" />
              Weekly Challenges
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {weeklyeChallenges.map((week) => {
              const weekCompleted = week.challenges.every(challenge => 
                completedChallenges.includes(challenge.id)
              );
              
              return (
                <button
                  key={week.week}
                  onClick={() => setSelectedWeek(week.week)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedWeek === week.week
                      ? 'bg-green-600 text-white'
                      : weekCompleted
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Week {week.week}
                  {weekCompleted && <CheckCircle className="inline h-4 w-4 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Week Challenges */}
        {currentWeekChallenges && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {currentWeekChallenges.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {currentWeekChallenges.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>🎯 {currentWeekChallenges.challenges.length} challenges</span>
                <span>⏱️ {currentWeekChallenges.duration}</span>
                <span className="flex items-center">
                  <Circle className="h-4 w-4 mr-1" />
                  Focus: {currentWeekChallenges.focus}
                </span>
              </div>
            </div>

            <AnimatePresence>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentWeekChallenges.challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ChallengeCard
                      challenge={challenge}
                      isCompleted={completedChallenges.includes(challenge.id)}
                      onToggle={() => toggleChallenge(challenge.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        )}

        {/* Completion Message */}
        {currentWeekChallenges && 
         currentWeekChallenges.challenges.every(challenge => 
           completedChallenges.includes(challenge.id)
         ) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center"
          >
            <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Week {selectedWeek} Complete! 🎉
            </h3>
            <p className="text-green-700 mb-4">
              Congratulations! You've completed all challenges for this week. 
              Your commitment to sustainability is making a difference!
            </p>
            {selectedWeek < weeklyeChallenges.length && (
              <button
                onClick={() => setSelectedWeek(selectedWeek + 1)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Move to Week {selectedWeek + 1}
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChallengesPage;