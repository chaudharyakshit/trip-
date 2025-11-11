// pages/destinations/JaipurPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.jsx'
import CursorFX from '../../components/CursorFX.jsx'

const JaipurPage = () => {
  return (
    <>
      <CursorFX />
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-amber-500 to-orange-600">
          <img 
            src="https://plus.unsplash.com/premium_photo-1697730286559-98b1a193eef6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
            alt="Jaipur"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-5xl font-bold mb-4">Jaipur, Rajasthan</h1>
              <p className="text-xl">The Pink City - Royal Heritage Experience</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Jaipur</h2>
                <p className="text-gray-700 mb-6">
                  Jaipur, the capital of Rajasthan, is known as the Pink City due to the distinct color of its buildings. 
                  It's a city rich in history, culture, and architectural marvels from the Rajput era.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Amber Fort - Majestic hilltop fortress
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    City Palace - Royal residence complex
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Hawa Mahal - Palace of Winds
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Jantar Mantar - Astronomical observatory
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Chokhi Dhani - Cultural village experience
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
                <p className="text-gray-700 mb-6">November to March - Pleasant weather for sightseeing</p>

                <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Royal Rajasthan Experience</h4>
                      <p className="text-gray-700">04 Days / 03 Nights</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-amber-600">$299</div>
                      <p className="text-gray-600 text-sm">per person</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                      Book Now
                    </button>
                    <button className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold transition-colors">
                      Download Itinerary
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup:</span>
                    <span className="font-semibold">Jaipur Airport or Railway Station</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-semibold">Heritage hotels, city resorts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">3-4 Days</span>
                  </div>
                </div>
              </div>

              {/* Next Destination */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Continue Your Journey</h3>
                <Link 
                  to="/destination/agra" 
                  className="block bg-gray-100 hover:bg-gray-200 rounded-xl p-4 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=200&auto=format&fit=crop"
                      alt="Agra"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Agra, Uttar Pradesh</h4>
                      <p className="text-sm text-gray-600">Home of Taj Mahal</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default JaipurPage