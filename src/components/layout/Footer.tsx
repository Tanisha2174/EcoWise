import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-lg font-bold">EcoWise</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your guide to a sustainable life. Making eco-friendly choices easier, one step at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/quiz" className="text-gray-300 hover:text-green-400 transition-colors">Sustainability Quiz</a></li>
              <li><a href="/tips" className="text-gray-300 hover:text-green-400 transition-colors">Eco Tips</a></li>
              <li><a href="/challenges" className="text-gray-300 hover:text-green-400 transition-colors">Challenges</a></li>
              <li><a href="/map" className="text-gray-300 hover:text-green-400 transition-colors">Green Map</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <p className="text-gray-300 text-sm mb-2">
              Join our community of eco-warriors making a difference.
            </p>
            <p className="text-gray-300 text-sm">
              Together, we can create a more sustainable future.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> for the planet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;