import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { TrendingUp, Award, Target, Calendar } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ScoreData {
  score: number;
  date: string;
}

const ProgressPage: React.FC = () => {
  const [sustainabilityScores, setSustainabilityScores] = useState<ScoreData[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [bookmarkedTips, setBookmarkedTips] = useState<string[]>([]);

  useEffect(() => {
    // Load sustainability scores
    const scores = localStorage.getItem('sustainabilityScores');
    if (scores) {
      setSustainabilityScores(JSON.parse(scores));
    } else {
      // Add some sample data for demonstration
      const sampleScores = [
        { score: 45, date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() },
        { score: 52, date: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000).toISOString() },
        { score: 48, date: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toISOString() },
        { score: 61, date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString() },
        { score: 58, date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
      ];
      setSustainabilityScores(sampleScores);
      localStorage.setItem('sustainabilityScores', JSON.stringify(sampleScores));
    }

    // Load completed challenges
    const challenges = localStorage.getItem('completedChallenges');
    if (challenges) {
      setCompletedChallenges(JSON.parse(challenges));
    }

    // Load bookmarked tips
    const tips = localStorage.getItem('bookmarkedTips');
    if (tips) {
      setBookmarkedTips(JSON.parse(tips));
    }
  }, []);

  // Prepare chart data
  const chartData = {
    labels: sustainabilityScores.map(score => 
      new Date(score.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    ),
    datasets: [
      {
        label: 'Sustainability Score',
        data: sustainabilityScores.map(score => score.score),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(34, 197, 94)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 6,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        }
      }
    }
  };

  // Challenge completion by category
  const challengeCategories = ['Energy', 'Waste', 'Transport', 'Water', 'Food'];
  const challengesByCategory = challengeCategories.map(category => ({
    category,
    count: completedChallenges.filter(id => id.includes(category.toLowerCase().substring(0, 3))).length
  }));

  const challengeBarData = {
    labels: challengeCategories,
    datasets: [
      {
        label: 'Completed Challenges',
        data: challengesByCategory.map(item => item.count),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(6, 182, 212, 0.8)',
          'rgba(251, 146, 60, 0.8)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(168, 85, 247)',
          'rgb(6, 182, 212)',
          'rgb(251, 146, 60)',
        ],
        borderWidth: 2,
      }
    ]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        }
      }
    }
  };

  const currentScore = sustainabilityScores.length > 0 
    ? sustainabilityScores[sustainabilityScores.length - 1].score 
    : 0;
  
  const previousScore = sustainabilityScores.length > 1 
    ? sustainabilityScores[sustainabilityScores.length - 2].score 
    : currentScore;
  
  const scoreChange = currentScore - previousScore;
  const averageScore = sustainabilityScores.length > 0 
    ? Math.round(sustainabilityScores.reduce((sum, score) => sum + score.score, 0) / sustainabilityScores.length)
    : 0;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Progress Tracker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor your sustainability journey and see how your eco-friendly habits 
            are making a positive impact over time.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">{currentScore}%</p>
                <p className="text-sm text-gray-600">Current Score</p>
              </div>
            </div>
            {scoreChange !== 0 && (
              <div className={`flex items-center text-sm ${
                scoreChange > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className={`h-4 w-4 mr-1 ${scoreChange < 0 ? 'rotate-180' : ''}`} />
                {scoreChange > 0 ? '+' : ''}{scoreChange} from last quiz
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">{averageScore}%</p>
                <p className="text-sm text-gray-600">Average Score</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Based on {sustainabilityScores.length} quiz{sustainabilityScores.length !== 1 ? 'zes' : ''}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 rounded-full p-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">{completedChallenges.length}</p>
                <p className="text-sm text-gray-600">Challenges Done</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Eco challenges completed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 rounded-full p-3">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">{bookmarkedTips.length}</p>
                <p className="text-sm text-gray-600">Saved Tips</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Bookmarked eco tips
            </p>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sustainability Score Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Sustainability Score Trend
            </h3>
            {sustainabilityScores.length > 0 ? (
              <div className="h-64">
                <Line data={chartData} options={chartOptions} />
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Take the sustainability quiz to see your progress here</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Challenge Completion by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Challenges by Category
            </h3>
            {completedChallenges.length > 0 ? (
              <div className="h-64">
                <Bar data={challengeBarData} options={barOptions} />
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Complete challenges to see your progress here</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Your Sustainability Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quiz Achievement */}
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                sustainabilityScores.length > 0 ? 'bg-green-500' : 'bg-gray-300'
              }`}>
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quiz Taker</h4>
              <p className="text-sm text-gray-600">
                {sustainabilityScores.length > 0 
                  ? `Completed ${sustainabilityScores.length} quiz${sustainabilityScores.length !== 1 ? 'zes' : ''}`
                  : 'Take your first sustainability quiz'
                }
              </p>
            </div>

            {/* Challenge Achievement */}
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                completedChallenges.length >= 5 ? 'bg-purple-500' : 'bg-gray-300'
              }`}>
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Challenge Champion</h4>
              <p className="text-sm text-gray-600">
                {completedChallenges.length >= 5
                  ? `Completed ${completedChallenges.length} challenges!`
                  : `${5 - completedChallenges.length} more challenges to unlock`
                }
              </p>
            </div>

            {/* Tips Achievement */}
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                bookmarkedTips.length >= 10 ? 'bg-yellow-500' : 'bg-gray-300'
              }`}>
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Tip Collector</h4>
              <p className="text-sm text-gray-600">
                {bookmarkedTips.length >= 10
                  ? `Bookmarked ${bookmarkedTips.length} eco tips!`
                  : `${10 - bookmarkedTips.length} more tips to bookmark`
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressPage;