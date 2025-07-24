import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import TipCard from '../components/tips/TipCard';
import { ecoTips, TipCategory } from '../utils/tipsData';

const EcoTipsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TipCategory | 'all'>('all');
  const [bookmarkedTips, setBookmarkedTips] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('bookmarkedTips');
    if (saved) {
      setBookmarkedTips(JSON.parse(saved));
    }
  }, []);

  const handleBookmark = (tipId: string) => {
    const updatedBookmarks = bookmarkedTips.includes(tipId)
      ? bookmarkedTips.filter(id => id !== tipId)
      : [...bookmarkedTips, tipId];
    
    setBookmarkedTips(updatedBookmarks);
    localStorage.setItem('bookmarkedTips', JSON.stringify(updatedBookmarks));
  };

  const filteredTips = ecoTips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories: { value: TipCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Tips' },
    { value: 'home', label: 'Home' },
    { value: 'food', label: 'Food' },
    { value: 'travel', label: 'Travel' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'energy', label: 'Energy' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Eco Tips & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover practical tips to make your lifestyle more sustainable. 
            Bookmark your favorites to create your personal eco-guide.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search eco tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as TipCategory | 'all')}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bookmarked Tips Count */}
        {bookmarkedTips.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <p className="text-green-800">
              📚 You have {bookmarkedTips.length} bookmarked tip{bookmarkedTips.length > 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Tips Grid */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TipCard
                  tip={tip}
                  isBookmarked={bookmarkedTips.includes(tip.id)}
                  onBookmark={() => handleBookmark(tip.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No tips found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcoTipsPage;