import React from 'react';
import { MapPin, Zap, Recycle, Leaf, Navigation } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  type: 'recycling' | 'charging' | 'organic' | 'green_space';
  address: string;
  coordinates: [number, number];
  description: string;
  hours?: string;
}

const GreenMapPage: React.FC = () => {
  const mockLocations: Location[] = [
    {
      id: '1',
      name: 'Green Valley Recycling Center',
      type: 'recycling',
      address: '123 Eco Street, Green City, GC 12345',
      coordinates: [40.7128, -74.0060],
      description: 'Full-service recycling center accepting electronics, batteries, and hazardous materials.',
      hours: 'Mon-Sat 8AM-6PM'
    },
    {
      id: '2',
      name: 'EV Fast Charging Station',
      type: 'charging',
      address: '456 Clean Avenue, Green City, GC 12345',
      coordinates: [40.7589, -73.9851],
      description: 'Tesla Supercharger and universal fast charging station with 8 charging ports.',
      hours: '24/7'
    },
    {
      id: '3',
      name: 'Organic Harvest Market',
      type: 'organic',
      address: '789 Natural Way, Green City, GC 12345',
      coordinates: [40.7831, -73.9712],
      description: 'Local organic produce, bulk foods, and eco-friendly household products.',
      hours: 'Daily 7AM-9PM'
    },
    {
      id: '4',
      name: 'Central Park Green Space',
      type: 'green_space',
      address: '101 Park Lane, Green City, GC 12345',
      coordinates: [40.7794, -73.9632],
      description: 'Urban park with walking trails, community garden, and outdoor exercise equipment.',
      hours: '6AM-10PM'
    },
    {
      id: '5',
      name: 'EcoTech Electronics Recycling',
      type: 'recycling',
      address: '321 Tech Boulevard, Green City, GC 12345',
      coordinates: [40.7505, -73.9934],
      description: 'Specialized in computer and phone recycling with data destruction services.',
      hours: 'Mon-Fri 9AM-5PM'
    },
    {
      id: '6',
      name: 'Clean Energy Charging Hub',
      type: 'charging',
      address: '654 Power Street, Green City, GC 12345',
      coordinates: [40.7282, -74.0776],
      description: 'Solar-powered charging station with Level 2 and DC fast charging options.',
      hours: '24/7'
    }
  ];

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'recycling': return <Recycle className="h-6 w-6 text-green-600" />;
      case 'charging': return <Zap className="h-6 w-6 text-blue-600" />;
      case 'organic': return <Leaf className="h-6 w-6 text-emerald-600" />;
      case 'green_space': return <MapPin className="h-6 w-6 text-purple-600" />;
      default: return <MapPin className="h-6 w-6 text-gray-600" />;
    }
  };

  const getLocationColor = (type: string) => {
    switch (type) {
      case 'recycling': return 'border-green-200 bg-green-50';
      case 'charging': return 'border-blue-200 bg-blue-50';
      case 'organic': return 'border-emerald-200 bg-emerald-50';
      case 'green_space': return 'border-purple-200 bg-purple-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getLocationTypeLabel = (type: string) => {
    switch (type) {
      case 'recycling': return 'Recycling Center';
      case 'charging': return 'EV Charging Station';
      case 'organic': return 'Organic Market';
      case 'green_space': return 'Green Space';
      default: return 'Location';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Green Map
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover eco-friendly locations near you. Find recycling centers, 
            EV charging stations, organic markets, and green spaces in your area.
          </p>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Location Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Recycle className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-700">Recycling Centers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-700">EV Charging</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-emerald-600" />
              <span className="text-sm text-gray-700">Organic Markets</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-700">Green Spaces</span>
            </div>
          </div>
        </div>

        {/* Locations List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLocations.map((location) => (
            <div
              key={location.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 ${getLocationColor(location.type)} overflow-hidden`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getLocationIcon(location.type)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {location.name}
                      </h3>
                      <span className="text-sm text-gray-600">
                        {getLocationTypeLabel(location.type)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {location.description}
                </p>

                {/* Address */}
                <div className="mb-3">
                  <p className="text-sm text-gray-800 font-medium">
                    📍 {location.address}
                  </p>
                </div>

                {/* Hours */}
                {location.hours && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      🕒 {location.hours}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      const query = encodeURIComponent(location.address);
                      window.open(`https://maps.google.com/maps?q=${query}`, '_blank');
                    }}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                  >
                    Get Directions
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(location.address);
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Copy Address
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Location CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Know of a Green Location?
          </h3>
          <p className="text-gray-600 mb-6">
            Help us expand our green map by suggesting eco-friendly locations in your area.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
            Suggest a Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreenMapPage;