// pages/destinations/MumbaiPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import CursorFX from "../../components/CursorFX.jsx";

const MumbaiPackage = () => {
  const slides = [
     "../../../public/assets/packages-images/mumbai-1.png",
    "../../../public/assets/packages-images/mumbai-2.png",
    "../../../public/assets/packages-images/mumbai-3.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <>
      <CursorFX />
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-0">
        <section className="relative h-[500px] overflow-hidden">
          {slides.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={img} alt={`Mumbai ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
            <div>
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Mumbai, Maharashtra</h1>
              <p className="text-xl drop-shadow-md">The City of Dreams — Where Culture Meets Coastline</p>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Mumbai</h2>
                <p className="text-gray-700 mb-6">
                  Mumbai, India’s financial capital, is known for its vibrant nightlife, colonial architecture,
                  coastal charm, and Bollywood glamour. A city that never sleeps and welcomes everyone.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Gateway of India - Iconic monument",
                    "Marine Drive - Queen’s Necklace view",
                    "Elephanta Caves - Ancient rock-cut temples",
                    "Colaba Causeway - Shopping street",
                    "Bandra-Worli Sea Link - Engineering marvel",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
                <p className="text-gray-700 mb-6">November to February - Ideal weather for exploration</p>

                <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Mumbai Explorer Package</h4>
                      <p className="text-gray-700">03 Days / 02 Nights</p>
                    </div>
                    <div className="text-right">
                      <a href="https://wa.me/919695947578?text=Hi, I'm interested in this Mumbai tour package. Please share the pricing details." target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                        Price on Request
                      </a>
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

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pickup:</span>
                    <span className="font-semibold">Mumbai Airport / Station</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-semibold">Sea-facing Hotels / City Resorts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">3 Days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Continue Your Journey</h3>
                <Link to="/destination/dehradun" className="block bg-gray-100 hover:bg-gray-200 rounded-xl p-4 transition-colors">
                  <div className="flex items-center gap-4">
                    <img src="/assets/packages-images/dehradun1.png" alt="Dehradun" className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-semibold">Dehradun, Uttarakhand</h4>
                      <p className="text-sm text-gray-600">Gateway to the Himalayas</p>
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

export default MumbaiPackage;
