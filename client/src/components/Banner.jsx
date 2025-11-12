import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/images/banner1.png',
      title: 'Discover Amazing Destinations',
      subtitle: 'Explore the world with our exclusive travel packages and create unforgettable memories'
    },
    {
      image: '/assets/images/banner2.png',
      title: 'Luxury Travel Experiences',
      subtitle: 'Indulge in premium accommodations and personalized service'
    },
    {
      image: '/assets/images/banner3.png',
      title: 'Adventure Awaits You',
      subtitle: 'Embark on thrilling journeys to the most exotic locations'
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="banner-container">
      {/* Slides */}
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%), url(${slide.image})`
            }}
          >
            {/* <div className="banner-content">
              <div className="banner-text">
                <h1 className="banner-title">
                  {slide.title}
                </h1>
                <p className="banner-subtitle">
                  {slide.subtitle}
                </p>
                <div className="banner-actions">
                  <button className="banner-btn primary">
                    Book Now
                  </button>
                  <button className="banner-btn secondary">
                    Learn More
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slide-arrow prev-arrow" onClick={prevSlide}>
        ‹
      </button>
      <button className="slide-arrow next-arrow" onClick={nextSlide}>
        ›
      </button>

      {/* Slide Indicators */}
      {/* <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}

      {/* Scroll indicator
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div> */}
    </div>
  );
};

export default Banner;