// pages/AllDestinations.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import CursorFX from '../components/CursorFX.jsx';
import ContactFooter from '../components/ContactFooter.jsx';

const AllDestinations = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const destinations = [
    {
      id: 'jaipur-page',
      image: "/assets/card-images/jaipur.png",
      title: "Jaipur, Rajasthan",
      tours: 15,
      state: "Rajasthan",
      category: "Cultural"
    },
    {
      id: 'agra-page',
      image: "/assets/card-images/Agra.png",
      title: "Agra, Uttar Pradesh",
      tours: 12,
      state: "Uttar Pradesh",
      category: "Historical"
    },
    {
      id: 'goa',
      image: "/assets/card-images/Goa.png",
      title: "Goa",
      tours: 20,
      state: "Goa",
      category: "Beach"
    },
    {
      id: 'kerala',
      image: "/assets/card-images/Kerala.png",
      title: "Kerala",
      tours: 18,
      state: "Kerala",
      category: "Nature"
    },
    {
      id: 'delhi',
      image: "/assets/card-images/Delhi.png",
      title: "Delhi",
      tours: 25,
      state: "Delhi",
      category: "Cultural"
    },
    {
      id: 'mumbai',
      image: "/assets/card-images/Mumbai.png",
      title: "Mumbai, Maharashtra",
      tours: 22,
      state: "Maharashtra",
      category: "Urban"
    },
    {
      id: 'udaipur',
      image: "/assets/card-images/udaipur.png",
      title: "Udaipur, Rajasthan",
      tours: 14,
      state: "Rajasthan",
      category: "Cultural"
    },
    {
      id: 'varanasi',
      image: "/assets/card-images/Varanasi.png",
      title: "Varanasi, Uttar Pradesh",
      tours: 16,
      state: "Uttar Pradesh",
      category: "Spiritual"
    },
    {
      id: 'rishikesh',
      image: "/assets/card-images/Rishikesh.png",
      title: "Rishikesh, Uttarakhand",
      tours: 13,
      state: "Uttarakhand",
      category: "Adventure"
    },
    {
      id: 'shimla',
      image: "/assets/card-images/Shimla.png",
      title: "Shimla, Himachal Pradesh",
      tours: 11,
      state: "Himachal Pradesh",
      category: "Hill Station"
    },
    {
      id: 'ladakh',
      image: "/assets/card-images/Ladakh.png",
      title: "Ladakh, Jammu & Kashmir",
      tours: 10,
      state: "Jammu & Kashmir",
      category: "Adventure"
    },
    {
      id: 'darjeeling',
      image: "/assets/card-images/darjeeling.png",
      title: "Darjeeling, West Bengal",
      tours: 12,
      state: "West Bengal",
      category: "Hill Station"
    },
    {
      id: 'amritsar',
      image: "/assets/card-images/Amritsar.png",
      title: "Amritsar, Punjab",
      tours: 14,
      state: "Punjab",
      category: "Spiritual"
    },
    {
      id: 'hampi',
      image: "/assets/card-images/Hampi,-Karnataka.png",
      title: "Hampi, Karnataka",
      tours: 9,
      state: "Karnataka",
      category: "Historical"
    },
    {
      id: 'mysore',
      image: "/assets/card-images/mysore.png",
      title: "Mysore, Karnataka",
      tours: 11,
      state: "Karnataka",
      category: "Cultural"
    },
    {
      id: 'coorg',
      image: "/assets/card-images/Coorg,-Karnataka.png",
      title: "Coorg, Karnataka",
      tours: 8,
      state: "Karnataka",
      category: "Nature"
    },
    {
      id: 'khajuraho',
      image: "/assets/card-images/Khajuraho,-Madhya-Pradesh.png",
      title: "Khajuraho, Madhya Pradesh",
      tours: 7,
      state: "Madhya Pradesh",
      category: "Historical"
    },
    {
      id: 'konark',
      image: "/assets/card-images/Konark,-Odisha.png",
      title: "Konark, Odisha",
      tours: 6,
      state: "Odisha",
      category: "Historical"
    },
    {
      id: 'kutch',
      image: "/assets/card-images/Rann.png",
      title: "Rann of Kutch, Gujarat",
      tours: 8,
      state: "Gujarat",
      category: "Cultural"
    },
    {
      id: 'sikkim',
      image: "/assets/card-images/Sikkim.png",
      title: "Sikkim (Gangtok)",
      tours: 10,
      state: "Sikkim",
      category: "Hill Station"
    },
    {
      id: 'pushkar',
      image: "/assets/card-images/Pushkar.png",
      title: "Pushkar, Rajasthan",
      tours: 9,
      state: "Rajasthan",
      category: "Spiritual"
    },
    {
      id: 'mahabalipuram',
      image: "/assets/card-images/Mahabalipuram.png",
      title: "Mahabalipuram, Tamil Nadu",
      tours: 7,
      state: "Tamil Nadu",
      category: "Historical"
    },
    {
      id: 'ajanta-ellora',
      image: "/assets/card-images/Ajanta.png",
      title: "Ajanta & Ellora Caves",
      tours: 8,
      state: "Maharashtra",
      category: "Historical"
    },
    {
      id: 'pune',
      image: "/assets/card-images/Pune,-Maharashtra.png",
      title: "Pune, Maharashtra",
      tours: 15,
      state: "Maharashtra",
      category: "Urban"
    },
    {
      id: 'auli',
      image: "/assets/card-images/Auli,-Uttarakhand.png",
      title: "Auli, Uttarakhand",
      tours: 6,
      state: "Uttarakhand",
      category: "Adventure"
    }
  ];

  // Get unique states and categories for filters
  const states = ['All', ...new Set(destinations.map(dest => dest.state))];
  const categories = ['All', ...new Set(destinations.map(dest => dest.category))];

  // Filter destinations based on selections
  const filteredDestinations = destinations.filter(dest => {
    const matchesState = selectedState === 'All' || dest.state === selectedState;
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesState && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <CursorFX />
      <Navbar />
      
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Destinations</h1>
            <p className="text-gray-600 text-lg">Discover amazing places across India</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-200px)]">
            {/* Filters Sidebar - Fixed */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* State Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedState('All');
                    setSelectedCategory('All');
                    setSearchTerm('');
                  }}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Destinations Grid - Scrollable */}
            <div className="lg:w-3/4">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredDestinations.length} of {destinations.length} destinations
                </p>
              </div>

              <div className="h-full overflow-y-auto pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                  {filteredDestinations.map((destination) => (
                    <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{destination.title}</h3>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-600">{destination.state}</span>
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {destination.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{destination.tours} tours available</p>
                        <Link
                          to={`/destination/${destination.id}`}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center block transition-colors"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredDestinations.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No destinations found matching your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactFooter />
    </div>
  );
};

export default AllDestinations;