// pages/AllDestinations.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import CursorFX from '../components/CursorFX.jsx';
import ContactFooter from '../components/ContactFooter.jsx';
import '../styles/destinations.css';

import imgJaipur from '../assets/card-images/jaipur.png';
import imgAgra from '../assets/card-images/Agra.png';
import imgGoa from '../assets/card-images/Goa.png';
import imgKerala from '../assets/card-images/Kerala.png';
import imgDelhi from '../assets/card-images/Delhi.png';
import imgMumbai from '../assets/card-images/Mumbai.png';
import imgUdaipur from '../assets/card-images/udaipur.png';
import imgVaranasi from '../assets/card-images/Varanasi.png';
import imgRishikesh from '../assets/card-images/Rishikesh.png';
import imgShimla from '../assets/card-images/Shimla.png';
import imgLadakh from '../assets/card-images/Ladakh.png';
import imgDarjeeling from '../assets/card-images/darjeeling.png';
import imgAmritsar from '../assets/card-images/Amritsar.png';
import imgHampi from '../assets/card-images/Hampi,-Karnataka.png';
import imgMysore from '../assets/card-images/mysore.png';
import imgCoorg from '../assets/card-images/Coorg,-Karnataka.png';
import imgKhajuraho from '../assets/card-images/Khajuraho,-Madhya-Pradesh.png';
import imgKonark from '../assets/card-images/Konark,-Odisha.png';
import imgKutch from '../assets/card-images/Rann.png';
import imgSikkim from '../assets/card-images/Sikkim.png';
import imgPushkar from '../assets/card-images/Pushkar.png';
import imgMahabalipuram from '../assets/card-images/Mahabalipuram.png';
import imgAjanta from '../assets/card-images/Ajanta.png';
import imgPune from '../assets/card-images/Pune,-Maharashtra.png';
import imgAuli from '../assets/card-images/Auli,-Uttarakhand.png';
import bannerImage from '../assets/images/banneralldestination.png';

const AllDestinations = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const destinations = [
    {
      id: 'jaipur-page',
      image: imgJaipur,
      title: "Jaipur, Rajasthan",
      tours: 15,
      state: "Rajasthan",
      category: "Cultural"
    },
    {
      id: 'agra-page',
      image: imgAgra,
      title: "Agra, Uttar Pradesh",
      tours: 12,
      state: "Uttar Pradesh",
      category: "Historical"
    },
    {
      id: 'goa',
      image: imgGoa,
      title: "Goa",
      tours: 20,
      state: "Goa",
      category: "Beach"
    },
    {
      id: 'kerala',
      image: imgKerala,
      title: "Kerala",
      tours: 18,
      state: "Kerala",
      category: "Nature"
    },
    {
      id: 'delhi',
      image: imgDelhi,
      title: "Delhi",
      tours: 25,
      state: "Delhi",
      category: "Cultural"
    },
    {
      id: 'mumbai',
      image: imgMumbai,
      title: "Mumbai, Maharashtra",
      tours: 22,
      state: "Maharashtra",
      category: "Urban"
    },
    {
      id: 'udaipur',
      image: imgUdaipur,
      title: "Udaipur, Rajasthan",
      tours: 14,
      state: "Rajasthan",
      category: "Cultural"
    },
    {
      id: 'varanasi',
      image: imgVaranasi,
      title: "Varanasi, Uttar Pradesh",
      tours: 16,
      state: "Uttar Pradesh",
      category: "Spiritual"
    },
    {
      id: 'rishikesh',
      image: imgRishikesh,
      title: "Rishikesh, Uttarakhand",
      tours: 13,
      state: "Uttarakhand",
      category: "Adventure"
    },
    {
      id: 'shimla',
      image: imgShimla,
      title: "Shimla, Himachal Pradesh",
      tours: 11,
      state: "Himachal Pradesh",
      category: "Hill Station"
    },
    {
      id: 'ladakh',
      image: imgLadakh,
      title: "Ladakh, Jammu & Kashmir",
      tours: 10,
      state: "Jammu & Kashmir",
      category: "Adventure"
    },
    {
      id: 'darjeeling',
      image: imgDarjeeling,
      title: "Darjeeling, West Bengal",
      tours: 12,
      state: "West Bengal",
      category: "Hill Station"
    },
    {
      id: 'amritsar',
      image: imgAmritsar,
      title: "Amritsar, Punjab",
      tours: 14,
      state: "Punjab",
      category: "Spiritual"
    },
    {
      id: 'hampi',
      image: imgHampi,
      title: "Hampi, Karnataka",
      tours: 9,
      state: "Karnataka",
      category: "Historical"
    },
    {
      id: 'mysore',
      image: imgMysore,
      title: "Mysore, Karnataka",
      tours: 11,
      state: "Karnataka",
      category: "Cultural"
    },
    {
      id: 'coorg',
      image: imgCoorg,
      title: "Coorg, Karnataka",
      tours: 8,
      state: "Karnataka",
      category: "Nature"
    },
    {
      id: 'khajuraho',
      image: imgKhajuraho,
      title: "Khajuraho, Madhya Pradesh",
      tours: 7,
      state: "Madhya Pradesh",
      category: "Historical"
    },
    {
      id: 'konark',
      image: imgKonark,
      title: "Konark, Odisha",
      tours: 6,
      state: "Odisha",
      category: "Historical"
    },
    {
      id: 'kutch',
      image: imgKutch,
      title: "Rann of Kutch, Gujarat",
      tours: 8,
      state: "Gujarat",
      category: "Cultural"
    },
    {
      id: 'sikkim',
      image: imgSikkim,
      title: "Sikkim (Gangtok)",
      tours: 10,
      state: "Sikkim",
      category: "Hill Station"
    },
    {
      id: 'pushkar',
      image: imgPushkar,
      title: "Pushkar, Rajasthan",
      tours: 9,
      state: "Rajasthan",
      category: "Spiritual"
    },
    {
      id: 'mahabalipuram',
      image: imgMahabalipuram,
      title: "Mahabalipuram, Tamil Nadu",
      tours: 7,
      state: "Tamil Nadu",
      category: "Historical"
    },
    {
      id: 'ajanta-ellora',
      image: imgAjanta,
      title: "Ajanta & Ellora Caves",
      tours: 8,
      state: "Maharashtra",
      category: "Historical"
    },
    {
      id: 'pune',
      image: imgPune,
      title: "Pune, Maharashtra",
      tours: 15,
      state: "Maharashtra",
      category: "Urban"
    },
    {
      id: 'auli',
      image: imgAuli,
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
      
      {/* Header Banner */}
      <div className="relative h-80 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center" style={{backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">All Destinations</h1>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>{'>'}</span>
            <span>All Destinations</span>
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="flex flex-col lg:flex-row gap-4">
            {/* Filters Sidebar - Fixed */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-4 lg:sticky lg:top-4 lg:max-h-[calc(100vh-120px)] overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                
                {/* Search */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* State Filter */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
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
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
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
            <div className="lg:w-3/4 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredDestinations.map((destination) => (
                    <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{destination.title}</h3>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-gray-600">{destination.state}</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {destination.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs mb-3">{destination.tours} tours available</p>
                        <Link
                          to={`/destination/${destination.id}`}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md text-center block transition-colors text-sm"
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
      
      <ContactFooter />
    </div>
  );
};

export default AllDestinations;