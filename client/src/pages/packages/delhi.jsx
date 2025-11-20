// pages/destinations/DelhiPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import CursorFX from "../../components/CursorFX.jsx";

const delhi = () => {
  const slides = [
   "../../../public/assets/packages-images/Delhi1.png",
    "../../../public/assets/packages-images/Delhi2.png",
    "../../../public/assets/packages-images/Delhi3.png",
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
              <img src={img} alt={`Delhi ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
            <div>
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Delhi, India</h1>
              <p className="text-xl drop-shadow-md">The Heart of India — Blend of History & Modernity</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Delhi</h2>
                <p className="text-gray-700 mb-6">
                  Delhi, the capital city of India, is a vibrant fusion of ancient heritage and modern culture. 
                  From Mughal architecture to contemporary skyscrapers, it reflects India's diverse essence.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Red Fort - UNESCO World Heritage site",
                    "Qutub Minar - Historic tower of victory",
                    "India Gate - National War Memorial",
                    "Lotus Temple - Symbol of peace",
                    "Connaught Place - Shopping & dining hub",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
                <p className="text-gray-700 mb-6">October to March - Pleasant climate for sightseeing</p>

                <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Delhi Heritage Explorer</h4>
                      <p className="text-gray-700">03 Days / 02 Nights</p>
                    </div>
                    <div className="text-right">
                      <a href="https://wa.me/919695947578?text=Hi, I'm interested in this Delhi tour package. Please share the pricing details." target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
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
                    <span className="font-semibold">Delhi Airport / Railway Station</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-semibold">City Hotels / Resorts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">3 Days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Continue Your Journey</h3>
                <Link
                  to="/destination/jaipur"
                  className="block bg-gray-100 hover:bg-gray-200 rounded-xl p-4 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="/assets/packages-images/jaipur1.png"
                      alt="Jaipur"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Jaipur, Rajasthan</h4>
                      <p className="text-sm text-gray-600">Royal Heritage Experience</p>
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

export default delhi;
