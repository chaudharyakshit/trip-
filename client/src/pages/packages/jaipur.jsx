// pages/destinations/JaipurPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import CursorFX from "../../components/CursorFX.jsx";

const JaipurPackage = () => {
  // === Hero Slider Logic ===
  const slides = [
   "../../../public/assets/packages-images/jaipur1.png",
    "../../../public/assets/packages-images/jaipur2.png",
    "../../../public/assets/packages-images/jaipur3.png"
  
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // change image every 4 seconds
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <>
      <CursorFX />
      <Navbar />

      {/* Remove extra padding (pt-20 → pt-0) */}
      <div className="min-h-screen bg-gray-50 pt-0">
        {/* === Hero Section with Slider === */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Slider Images */}
          {slides.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Jaipur ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          ))}

          {/* Hero Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
            <div className="animate-fadeIn">
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                Jaipur, Rajasthan
              </h1>
              <p className="text-xl drop-shadow-md">
                The Pink City — Royal Heritage Experience
              </p>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </section>

        {/* === Main Content === */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Jaipur
                </h2>
                <p className="text-gray-700 mb-6">
                  Jaipur, the capital of Rajasthan, is known as the Pink City due
                  to the distinct color of its buildings. It's a city rich in
                  history, culture, and architectural marvels from the Rajput
                  era.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Amber Fort - Majestic hilltop fortress",
                    "City Palace - Royal residence complex",
                    "Hawa Mahal - Palace of Winds",
                    "Jantar Mantar - Astronomical observatory",
                    "Chokhi Dhani - Cultural village experience",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mb-4">
                  Best Time to Visit
                </h3>
                <p className="text-gray-700 mb-6">
                  November to March - Pleasant weather for sightseeing
                </p>

                <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Royal Rajasthan Experience
                      </h4>
                      <p className="text-gray-700">04 Days / 03 Nights</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-amber-600">₹7475</div>
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
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup:</span>
                    <span className="font-semibold">
                      Jaipur Airport or Railway Station
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-semibold">
                      Heritage hotels, city resorts
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">3-4 Days</span>
                  </div>
                </div>
              </div>

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
  );
};

export default JaipurPackage;
