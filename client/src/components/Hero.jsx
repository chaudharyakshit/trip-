import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import '../styles/hero.css';

export default function Hero() {
  const videoRef = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeTab, setActiveTab] = useState('Tours');
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  
  // Reveal search panel only after user starts scrolling
  const [showPanel, setShowPanel] = useState(false);
  
  const [selectedDestination, setSelectedDestination] = useState({ name: 'Bali Paradise', country: 'Indonesia' });
  const [selectedDate, setSelectedDate] = useState({ date: '21 October', day: 'Tuesday 2025' });
  const [selectedCategory, setSelectedCategory] = useState({ name: 'Family Tour', type: 'Category' });

  const destinations = [
    { name: 'Bali Paradise', country: 'Indonesia' },
    { name: 'Paris Getaway', country: 'France' },
    { name: 'Tokyo Adventure', country: 'Japan' },
    { name: 'New York City', country: 'USA' },
    { name: 'Sydney Escape', country: 'Australia' }
  ];

  const categories = [
    { name: 'Family Tour', type: 'Category' },
    { name: 'Honeymoon', type: 'Romantic' },
    { name: 'Adventure', type: 'Active' },
    { name: 'Luxury', type: 'Premium' },
    { name: 'Budget', type: 'Economy' }
  ];

  // Calendar data for October 2025
  const calendarData = {
    month: 'October 2025',
    days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    dates: [
      [null, null, null, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24, 25],
      [26, 27, 28, 29, 30, 31, null]
    ]
  };

  const TabIcon = ({ name }) => {
    switch (name) {
      case 'Tours':
        return (
          <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm2 2v12h14V6H5Zm3 2h2v2H8V8Zm0 4h2v2H8v-2Zm4-4h2v2h-2V8Zm0 4h2v2h-2v-2Z"/>
          </svg>
        );
      case 'Hotels':
        return (
          <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 11V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5h-2V8H5v3H3Zm0 2h18v6a1 1 0 0 1-1 1h-4v-3H8v3H4a1 1 0 0 1-1-1v-6Z"/>
          </svg>
        );
      case 'Bus':
        return (
          <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 3a4 4 0 0 0-4 4v7.5A2.5 2.5 0 0 0 4.5 17v2.25a.75.75 0 0 0 1.5 0V17h12v2.25a.75.75 0 0 0 1.5 0V17A2.5 2.5 0 0 0 22 14.5V7a4 4 0 0 0-4-4H6Zm0 1.5h12A2.5 2.5 0 0 1 20.5 7v3.5H3.5V7A2.5 2.5 0 0 1 6 4.5ZM6.75 14a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 6.75 14Zm10.5 0A1.25 1.25 0 1 0 17.25 16.5 1.25 1.25 0 0 0 17.25 14Z"/>
          </svg>
        );
      case 'Experience':
        return (
          <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!swiperRef) return;
    if (swiperRef.realIndex === 0) {
      swiperRef.autoplay.stop();
      const v = videoRef.current;
      if (v) {
        try { v.currentTime = 0; } catch (e) {}
        v.play().catch(() => {});
      }
    }
  }, [swiperRef]);

  useEffect(() => {
    const onScroll = () => setShowPanel(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    setShowDestinationDropdown(false);
  };

  const handleDateSelect = (day) => {
    if (day) {
      const date = new Date(2025, 9, day); // October is month 9 (0-indexed)
      const dateString = `${day} October`;
      const dayString = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric' });
      setSelectedDate({ date: dateString, day: dayString });
      setShowDateDropdown(false);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.field-group')) {
        setShowDestinationDropdown(false);
        setShowDateDropdown(false);
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background slider */}
      <div className="background-slider">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSwiper={setSwiperRef}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="slide-video-container">
              <video ref={videoRef} className="background-video" muted playsInline>
                <source src="/assets/images/HERO%20VIDEO.mp4.mp4" type="video/mp4" />
                <source src="/assets/images/HERO%20VIDEO.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source srcSet="/assets/images/hero%201.jpg.jpeg" type="image/jpeg" />
              <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2000&auto=format&fit=crop" alt="Hero 1" className="background-image" />
            </picture>
            <div className="image-overlay" />
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source srcSet="/assets/images/hero%202.jpg.jpeg" type="image/jpeg" />
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop" alt="Hero 2" className="background-image" />
            </picture>
            <div className="image-overlay" />
          </SwiperSlide>
        </Swiper>

        {/* Navigation arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          className="nav-arrow nav-arrow-prev"
          onClick={() => swiperRef && swiperRef.slidePrev()}
        >
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.78 15.53a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L8.31 10l4.47 4.47a.75.75 0 0 1 0 1.06Z"/>
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="nav-arrow nav-arrow-next"
          onClick={() => swiperRef && swiperRef.slideNext()}
        >
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.22 4.47a.75.75 0 0 1 1.06 0L12.78 9a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L10.69 10 7.22 5.53a.75.75 0 0 1 0-1.06Z"/>
          </svg>
        </button>
      </div>

      {/* Foreground content */}
      <div className="foreground-content">
        <div className="content-wrapper">
          {/* <div className="text-content">
            <h1 className="main-heading">
              Plan Your Trip,
              <br />
              Your Way.
            </h1>
            <p className="sub-heading">
              Perfect for customized travel experiences—tailored flights, stays, and tours just for you.
            </p>
          </div> */}

          {/* Search panel (reveals after scroll) */}
          <div className={`search-panel-container ${showPanel ? 'visible' : 'hidden'}`}>
            <div className="search-panel">
              {/* Tabs */}
              <div className="tabs-container">
                {['Tours','Hotels','Bus','Experience'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTab(t)}
                    className={`tab-button ${activeTab === t ? 'tab-active' : 'tab-inactive'}`}
                  >
                    <TabIcon name={t} />
                    {t}
                  </button>
                ))}
              </div>

              {/* Search content */}
              <div className="search-content">
                <div className="search-fields">
                  {/* Destination Field */}
                  <div className="field-group">
                    <div 
                      className="field-input"
                      onClick={() => {
                        setShowDestinationDropdown(!showDestinationDropdown);
                        setShowDateDropdown(false);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      <svg className="field-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
                      </svg>
                      <div className="field-text">
                        <div className="field-main-text">{selectedDestination.name}</div>
                        <div className="field-sub-text">{selectedDestination.country}</div>
                      </div>
                      <svg className={`dropdown-arrow ${showDestinationDropdown ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"/>
                      </svg>
                    </div>
                    {showDestinationDropdown && (
                      <div className="dropdown-menu destination-dropdown">
                        {destinations.map((destination, index) => (
                          <div 
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleDestinationSelect(destination)}
                          >
                            <div className="dropdown-main-text">{destination.name}</div>
                            <div className="dropdown-sub-text">{destination.country}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Date Field */}
                  <div className="field-group">
                    <div 
                      className="field-input"
                      onClick={() => {
                        setShowDateDropdown(!showDateDropdown);
                        setShowDestinationDropdown(false);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      <svg className="field-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 9H5v7h14v-7Z"/>
                      </svg>
                      <div className="field-text">
                        <div className="field-main-text">{selectedDate.date}</div>
                        <div className="field-sub-text">{selectedDate.day}</div>
                      </div>
                      <svg className={`dropdown-arrow ${showDateDropdown ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"/>
                      </svg>
                    </div>
                    {showDateDropdown && (
                      <div className="dropdown-menu calendar-dropdown">
                        <div className="calendar-header">
                          <div className="calendar-month">{calendarData.month}</div>
                        </div>
                        <div className="calendar-grid">
                          {calendarData.days.map((day, index) => (
                            <div key={index} className="calendar-day-header">{day}</div>
                          ))}
                          {calendarData.dates.map((week, weekIndex) =>
                            week.map((day, dayIndex) => (
                              <div
                                key={`${weekIndex}-${dayIndex}`}
                                className={`calendar-day ${day === 21 ? 'selected' : ''} ${day ? 'has-date' : 'empty'}`}
                                onClick={() => handleDateSelect(day)}
                              >
                                {day}
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Category Field */}
                  <div className="field-group">
                    <div 
                      className="field-input"
                      onClick={() => {
                        setShowCategoryDropdown(!showCategoryDropdown);
                        setShowDestinationDropdown(false);
                        setShowDateDropdown(false);
                      }}
                    >
                      <svg className="field-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c4.418 0 8 2.239 8 5v10a1 1 0 0 1-1.555.832L12 15.5l-6.445 3.332A1 1 0 0 1 4 18V8c0-2.761 3.582-5 8-5Z"/>
                      </svg>
                      <div className="field-text">
                        <div className="field-main-text">{selectedCategory.name}</div>
                        <div className="field-sub-text">{selectedCategory.type}</div>
                      </div>
                      <svg className={`dropdown-arrow ${showCategoryDropdown ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z"/>
                      </svg>
                    </div>
                    {showCategoryDropdown && (
                      <div className="dropdown-menu category-dropdown">
                        {categories.map((category, index) => (
                          <div 
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleCategorySelect(category)}
                          >
                            <div className="dropdown-main-text">{category.name}</div>
                            <div className="dropdown-sub-text">{category.type}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Search Button */}
                  <button type="button" className="search-button">
                    <svg className="search-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 2a8 8 0 1 1-6.32 12.9l-3.02 3.02a1 1 0 0 1-1.41-1.41l3.02-3.02A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4Z"/>
                    </svg>
                    SEARCH
                  </button>
                </div>

                {/* Custom Itinerary Link */}
                <div className="custom-itinerary-container">
                  <p className="custom-itinerary-text">
                    Can't find what you're looking for? create your <a href="#" className="custom-link">Custom Itinerary</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}