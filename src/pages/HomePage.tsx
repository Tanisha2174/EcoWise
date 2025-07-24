import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Target, 
  MapPin, 
  TrendingUp, 
  Lightbulb, 
  Users 
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Sustainability Quiz',
      description: 'Discover your environmental impact with our comprehensive quiz',
      link: '/quiz',
      color: 'text-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Eco Tips',
      description: 'Get practical tips for sustainable living across all areas of life',
      link: '/tips',
      color: 'text-yellow-600'
    },
    {
      icon: MapPin,
      title: 'Green Map',
      description: 'Find eco-friendly locations and services near you',
      link: '/map',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Challenges',
      description: 'Join weekly sustainability challenges and track your progress',
      link: '/challenges',
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracker',
      description: 'Monitor your sustainability journey with detailed analytics',
      link: '/progress',
      color: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Leaf className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to EcoWise
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Your comprehensive guide to sustainable living. Make eco-friendly choices 
              that benefit both you and our planet.
            </p>
            <Link
              to="/quiz"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors duration-300 shadow-lg"
            >
              Start Your Sustainability Journey
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 fill-green-50">
            <path d="M0,0V60c40,0,80-20,120-20s80,20,120,20,80-20,120-20,80,20,120,20,80-20,120-20,80,20,120,20,80-20,120-20,80,20,120,20,80-20,120-20,80,20,120,20V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Everything You Need for Sustainable Living
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover tools, tips, and community support to help you make 
              environmentally conscious decisions every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <Link
                  to={feature.link}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:border-green-200 group"
                >
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of eco-conscious individuals who are already making 
              sustainable choices with EcoWise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quiz"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Take the Quiz
              </Link>
              <Link
                to="/tips"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors duration-300"
              >
                Browse Tips
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;