import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
    }, 3000); // Change slide every 3 seconds

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

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      className="banner-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`
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
      <button 
        className="slide-arrow prev-arrow" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        className="slide-arrow next-arrow" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Slide Indicators - Visible on mobile */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;