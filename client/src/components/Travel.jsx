import React, { useState, useEffect } from 'react';

const TravelAgency = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: '#3B82F6', // blue-500
    },
    hover: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: '#EA580C', // orange-500
      scale: 1.2,
    }
  };

  return (
    <div className="font-sans">
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: cursorVariants[cursorVariant].x,
          top: cursorVariants[cursorVariant].y,
          backgroundColor: cursorVariants[cursorVariant].backgroundColor,
          transform: `scale(${cursorVariants[cursorVariant].scale || 1})`
        }}
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full mr-3"></div>
            <span className="text-xl font-bold text-blue-600">GoFly</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-blue-600 hover:text-orange-600 transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Home
            </a>
            <a 
              href="#destinations" 
              className="text-blue-600 hover:text-orange-600 transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Destinations
            </a>
            <a 
              href="#packages" 
              className="text-blue-600 hover:text-orange-600 transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Packages
            </a>
            <a 
              href="#about" 
              className="text-blue-600 hover:text-orange-600 transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-blue-600 hover:text-orange-600 transition-colors duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-orange-600 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Explore The World With Us
            </h1>
            <p className="text-xl mb-8">
              Discover amazing places at exclusive deals. Build memories all around the world.
            </p>
            <div className="flex space-x-4">
              <button 
                className="px-6 py-3 bg-orange-600 rounded-full hover:bg-orange-700 transition-colors duration-300"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Explore Destinations
              </button>
              <button 
                className="px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular destinations that travelers choose for their perfect getaway.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Paris, France", price: "₹30000", image: "bg-gradient-to-br from-blue-400 to-blue-600" },
              { name: "Tokyo, Japan", price: "₹37500", image: "bg-gradient-to-br from-orange-400 to-orange-600" },
              { name: "Bali, Indonesia", price: "₹22500", image: "bg-gradient-to-br from-green-400 to-green-600" },
              { name: "New York, USA", price: "₹35000", image: "bg-gradient-to-br from-purple-400 to-purple-600" }
            ].map((destination, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className={`h-48 ${destination.image} flex items-end p-4`}>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <a href="https://wa.me/919695947578?text=Hi, I'm interested in this destination. Please share the pricing details." target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold transition-colors inline-block">
                      Price on Request
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of services to make your travel experience seamless and memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Flight Booking", 
                description: "We find the best flight deals for your destination with flexible options.",
                icon: "✈️"
              },
              { 
                title: "Hotel Reservation", 
                description: "Comfortable and affordable accommodations tailored to your preferences.",
                icon: "🏨"
              },
              { 
                title: "Tour Packages", 
                description: "Curated experiences that showcase the best of each destination.",
                icon: "🗺️"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today and let us help you plan the perfect trip.
          </p>
          <button 
            className="px-8 py-3 bg-orange-600 rounded-full text-white font-bold hover:bg-orange-700 transition-colors duration-300"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-xl font-bold">GoFly</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for memorable travel experiences around the world.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Packages</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@gofly.com</li>
                <li>123 Travel Street, Adventure City</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and travel tips.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg text-gray-800 w-full"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GoFly Travel Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelAgency;