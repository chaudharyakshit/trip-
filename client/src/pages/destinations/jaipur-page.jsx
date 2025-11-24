import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/ContactFooter.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CursorFX from "../../components/CursorFX.jsx";
import { 
  FaStar, 
  FaRegStar, 
  FaShieldAlt, 
  FaMoneyBillWave, 
  FaGift, 
  FaCheck, 
  FaUserFriends,
  FaHotel,
  FaUsers,
  FaUser,
  FaUtensils,
  FaGlobe,
  FaCalendar,
  FaCar,
  FaPaw,
  FaMountain
} from 'react-icons/fa';

// Import images - Corrected paths (remove "public" from the path)
import jaipur1 from '../../assets/packages-images/jaipur1.png';
import jaipur2 from '../../assets/packages-images/jaipur2.png';
import jaipur3 from '../../assets/packages-images/jaipur3.png';

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/destination-mobile-fix.css";

const JaipurPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  const jaipurImages = [jaipur1, jaipur2, jaipur3];

  return (
    <div className="inner-page">
      {/* Custom Navbar */}
      <CursorFX />
      <Navbar />
      
      {/* Hero Section with Slider - Full Width */}
      <section className="hero-section">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="hero-slider"
        >
          {jaipurImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <img
                  src={img}
                  alt={`Jaipur ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* New Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-left">
            {/* No Booking Fee */}
            <div className="no-fee-badge">
              <svg className="no-fee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              No Booking Fee
            </div>
            
            {/* Best Price Ever */}
            <div className="best-price-badge">
              <svg className="best-price-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Best Price Ever
            </div>
          </div>

          <div className="banner-center">
            {/* Rating Section */}
            <div className="rating-section">
              <div className="stars-container">
                <FaStar className="star-icon filled" />
                <FaStar className="star-icon filled" />
                <FaStar className="star-icon filled" />
                <FaStar className="star-icon filled" />
                <FaRegStar className="star-icon empty" />
              </div>
              <div className="rating-details">
                <span className="rating-text">(4.5/5)</span>
                <span className="review-count">based on 138 reviews</span>
              </div>
            </div>
          </div>

          <div className="banner-right">
            {/* 100% Carbon Neutral */}
            <div className="carbon-neutral-badge">
              <svg className="carbon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              100% Carbon Neutral
            </div>
          </div>
        </div>
      </section>

      <div className="container main-content">
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* About Section */}
            <section className="about-section">
              <h2>About Tour Package</h2>
              <p>
                Jaipur, the Pink City of India, offers a perfect blend of history, culture, and royal heritage. Whether you're exploring magnificent forts, indulging in Rajasthani cuisine, or shopping in vibrant markets, this city has something for every traveler.
              </p>
              
              <div className="package-details-grid">
                <div className="package-detail-card">
                  <FaHotel className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Accommodation</div>
                    <div className="package-detail-value">5 Star Hotel</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaUsers className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Group Size</div>
                    <div className="package-detail-value">10-20</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaUser className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Age Range</div>
                    <div className="package-detail-value">18-45 (Year)</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaUtensils className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Meals</div>
                    <div className="package-detail-value">Breakfast & Dinner</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaGlobe className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Language</div>
                    <div className="package-detail-value">English, Spanish</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaCalendar className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Season</div>
                    <div className="package-detail-value">Winter Season</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaCar className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Transportation</div>
                    <div className="package-detail-value">Taxi, Car</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaPaw className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Animal</div>
                    <div className="package-detail-value">Cat, Pet only</div>
                  </div>
                </div>
                <div className="package-detail-card">
                  <FaMountain className="package-detail-icon" />
                  <div className="package-detail-content">
                    <div className="package-detail-label">Category</div>
                    <div className="package-detail-value">Adventure</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Rest of your existing sections remain the same */}
            <section className="locations-section">
              <h2>Explore Locations</h2>
              <div className="locations-grid">
                <div className="location-card">
                  <div className="location-icon">🏰</div>
                  <h3>Amber Fort</h3>
                  <span className="duration">(02 Days)</span>
                </div>
                <div className="location-card">
                  <div className="location-icon">🌅</div>
                  <h3>Hawa Mahal</h3>
                  <span className="duration">(01 Days)</span>
                </div>
                <div className="location-card">
                  <div className="location-icon">🕌</div>
                  <h3>City Palace</h3>
                  <span className="duration">(01 Days)</span>
                </div>
              </div>
            </section>

            <section className="highlights-section">
              <h2>Highlights of the Tour</h2>
              <div className="highlights-list">
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Amber Fort – Elephant ride and light & sound show
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Hawa Mahal – Palace of Winds with unique architecture
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  City Palace – Royal residence with museum
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Jantar Mantar – Ancient astronomical observatory
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Chokhi Dhani – Traditional Rajasthani village experience
                </div>
              </div>
            </section>

            <section className="itinerary-section">
              <h2>Tour Itinerary</h2>
              <div className="itinerary-list">
                <div className="departure-point">
                  <span className="location">Jaipur, India</span>
                  <span className="time">Departure: 8:00 am - 8:30am</span>
                </div>
                
                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-01</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Amber Fort – Majestic hilltop fort</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-02</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Hawa Mahal – Palace of Winds</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-03</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>City Palace – Royal residence</h4>
                </div>

                <div className="departure-point">
                  <span className="location">Jaipur City</span>
                  <span className="time">Departure: 8:00 am - 8:30am</span>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-04</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Jantar Mantar – Astronomical observatory</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-05</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Chokhi Dhani – Cultural village</h4>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="right-column">
            <div className="booking-widget">
              <div className="price-section">
                <div className="price-display">
                  <div className="starting-from">Starting From</div>
                  <div className="price-row">
                    <span className="original-price">$899</span>
                    <span className="current-price">$800</span>
                  </div>
                  <div className="price-label">per person</div>
                </div>
                <button className="book-now-btn">
                  Book Now
                </button>
              </div>

              <div className="guarantees">
                <div className="guarantee-item">
                  <FaMoneyBillWave className="guarantee-icon" />
                  <span>Money Back Guarantee.</span>
                </div>
                <div className="guarantee-item">
                  <FaShieldAlt className="guarantee-icon" />
                  <span>Your Safety is Our Top Priority.</span>
                </div>
              </div>

              <div className="booking-form">
                <div className="form-group">
                  <label>Check Availability <FaStar className="star-small" /></label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="form-input"
                  />
                </div>

                <button className="submit-btn">
                  Submit an Enquiry <FaStar className="star-small" />
                </button>

                <div className="bonus-notice">
                  <FaGift className="bonus-icon" />
                  <span>Bonus Activity Included – Limited Time!</span>
                </div>
              </div>

              <div className="customize-section">
                <h3>Customize Travel Package!</h3>
                <div className="customize-features">
                  <div className="feature-item">
                    <FaCheck className="feature-check" />
                    <span>Make Your Favourite Package</span>
                  </div>
                  <div className="feature-item">
                    <FaCheck className="feature-check" />
                    <span>Enjoy Your Trip</span>
                  </div>
                </div>
                <div className="guide-count">
                  <FaUserFriends className="guide-icon" />
                  <span><strong>60+</strong> Guide Await to Help You</span>
                </div>
                <button className="customize-btn">
                  Customize Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      
      <style jsx>{`
        .inner-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header Styles */
        .header {
          background: white;
          padding: 15px 0;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo h2 {
          margin: 0;
          color: #2563eb;
          font-size: 24px;
          font-weight: bold;
        }

        .nav {
          display: flex;
          gap: 30px;
        }

        .nav a {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          transition: color 0.3s;
          font-size: 14px;
        }

        .nav a.active,
        .nav a:hover {
          color: #2563eb;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 14px;
        }

        .whatsapp {
          color: #64748b;
          font-weight: 500;
        }

        .login-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 20px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
        }

        .login-btn:hover {
          background: #1d4ed8;
        }

        /* Hero Section */
        .hero-section {
          margin: 0;
          padding: 0;
          position: relative;
          height: 500px;
          overflow: hidden;
          width: 100%;
        }

        .hero-slider {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .hero-slide {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
        }

        .w-full {
          width: 100%;
        }

        .h-full {
          height: 100%;
        }

        .object-cover {
          object-fit: cover;
        }

        /* Banner Section */
        .banner-section {
          background: #ffffff;
          padding: 25px 0;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin: 0;
        }

        .banner-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .banner-left,
        .banner-center,
        .banner-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        /* No Booking Fee */
        .no-fee-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          font-weight: 600;
          font-size: 14px;
          color: #1e293b;
        }

        .no-fee-icon {
          width: 18px;
          height: 18px;
          color: #10b981;
        }

        /* Best Price Ever */
        .best-price-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #ffedd5, #fed7aa);
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid #fdba74;
          font-weight: 600;
          font-size: 14px;
          color: #7c2d12;
        }

        .best-price-icon {
          width: 18px;
          height: 18px;
          color: #ea580c;
        }

        /* Rating Section */
        .rating-section {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fefce8;
          padding: 10px 20px;
          border-radius: 8px;
          border: 1px solid #fef08a;
        }

        .stars-container {
          display: flex;
          gap: 2px;
        }

        .star-icon {
          width: 16px;
          height: 16px;
        }

        .star-icon.filled {
          color: #fbbf24;
        }

        .star-icon.empty {
          color: #d1d5db;
        }

        .rating-text {
          font-size: 14px;
          color: #854d0e;
          font-weight: 500;
        }

        .review-count {
          font-size: 12px;
          color: #a16207;
        }

        /* Carbon Neutral */
        .carbon-neutral-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid #86efac;
          font-weight: 600;
          font-size: 14px;
          color: #166534;
        }

        .carbon-icon {
          width: 18px;
          height: 18px;
          color: #16a34a;
        }

        /* Main Content */
        .main-content {
          padding: 30px 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        /* Left Column Styles */
        .left-column section {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 25px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
        }

        .left-column h2 {
          color: #1f2937;
          margin-bottom: 20px;
          font-size: 24px;
          border-bottom: none;
          padding-bottom: 0;
          font-weight: 700;
        }

        .about-section p {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 25px;
          font-size: 15px;
        }

        /* Package Details Grid - 3x3 Layout */
        .package-details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .package-detail-card {
          background: #f8fafc;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .package-detail-card:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .package-detail-icon {
          font-size: 24px;
          color: grey;
          margin-bottom: 12px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .package-detail-content {
          text-align: center;
        }

        .package-detail-label {
          color: #6b7280;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .package-detail-value {
          color: #1f2937;
          font-size: 14px;
          font-weight: 600;
        }

        /* Locations Grid */
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .location-card {
          background: white;
          padding: 25px 20px;
          border-radius: 12px;
          text-align: center;
          border: 2px solid #e2e8f0;
          transition: all 0.3s;
          cursor: pointer;
        }

        .location-card:hover {
          border-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
        }

        .location-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .location-card h3 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 16px;
          font-weight: 600;
        }

        .duration {
          color: #2563eb;
          font-weight: 600;
          font-size: 14px;
        }

        /* Highlights List */
        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #475569;
          line-height: 1.5;
          font-size: 15px;
        }

        .highlight-item .check {
          color: #10b981;
          font-weight: bold;
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Itinerary Styles */
        .itinerary-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .departure-point {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          padding: 15px 20px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
        }

        .day-item {
          background: #f8fafc;
          padding: 20px;
          border-radius: 10px;
          border-left: 4px solid #10b981;
          transition: all 0.3s;
        }

        .day-item:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .day-item.completed {
          border-left-color: #10b981;
        }

        .day-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .day-number {
          font-weight: 600;
          color: #1e293b;
          font-size: 14px;
        }

        .day-status {
          color: #10b981;
          font-weight: bold;
          font-size: 16px;
        }

        .day-item h4 {
          margin: 0;
          color: #475569;
          font-size: 15px;
          font-weight: 500;
        }

        /* Right Column - Booking Widget */
        .booking-widget {
          position: sticky;
          top: 100px;
        }

        .price-section {
          background: white;
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
          border: 1px solid #e5e7eb;
        }

        .price-display {
          margin-bottom: 20px;
        }

        .starting-from {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .price-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 5px;
        }

        .original-price {
          font-size: 20px;
          color: #9ca3af;
          text-decoration: line-through;
          font-weight: 500;
        }

        .current-price {
          font-size: 32px;
          color: #1f2937;
          font-weight: 700;
        }

        .price-label {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .book-now-btn {
          width: 100%;
          padding: 14px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .book-now-btn:hover {
          background: #2563eb;
        }

        .guarantees {
          background: white;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          color: #4b5563;
          font-size: 14px;
          font-weight: 500;
        }

        .guarantee-item:last-child {
          margin-bottom: 0;
        }

        .guarantee-icon {
          color: #f59e0b;
          font-size: 16px;
          flex-shrink: 0;
        }

        .booking-form {
          background: white;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #374151;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .star-small {
          color: #f59e0b;
          font-size: 12px;
        }

        .form-input {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.3s;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .submit-btn:hover {
          background: #2563eb;
        }

        .bonus-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #f59e0b;
          font-weight: 600;
          text-align: center;
          font-size: 14px;
          padding: 12px;
          background: #fffbeb;
          border-radius: 8px;
          border: 1px solid #fef3c7;
        }

        .bonus-icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        .customize-section {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          text-align: center;
        }

        .customize-section h3 {
          color: #1f2937;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 700;
        }

        .customize-features {
          margin-bottom: 20px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          color: #4b5563;
          justify-content: flex-start;
          font-size: 14px;
          font-weight: 500;
        }

        .feature-check {
          color: #10b981;
          font-size: 16px;
          flex-shrink: 0;
        }

        .guide-count {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #3b82f6;
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 600;
          justify-content: center;
        }

        .guide-icon {
          font-size: 18px;
        }

        .guide-count strong {
          font-size: 20px;
          color: #1d4ed8;
        }

        .customize-btn {
          background: #f97316;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          width: 100%;
        }

        .customize-btn:hover {
          background: #ea580c;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .banner-content {
            justify-content: center;
            gap: 15px;
          }
          
          .banner-left,
          .banner-center,
          .banner-right {
            flex: 1;
            justify-content: center;
            min-width: 200px;
          }

          .package-details-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .hero-section {
            height: 400px;
          }

          .hero-slide {
            height: 400px;
          }

          .banner-section {
            padding: 20px 0;
          }
          
          .banner-content {
            flex-direction: column;
            gap: 15px;
          }
          
          .banner-left,
          .banner-center,
          .banner-right {
            width: 100%;
            justify-content: center;
          }
          
          .rating-section {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .package-details-grid {
            grid-template-columns: 1fr;
          }

          .locations-grid {
            grid-template-columns: 1fr;
          }

          .booking-widget {
            position: static;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 300px;
          }

          .hero-slide {
            height: 300px;
          }

          .banner-section {
            padding: 15px 0;
          }
          
          .no-fee-badge,
          .best-price-badge,
          .carbon-neutral-badge {
            padding: 8px 12px;
            font-size: 13px;
          }
          
          .rating-section {
            padding: 8px 15px;
          }
          
          .rating-text {
            font-size: 13px;
          }

          .current-price {
            font-size: 28px;
          }

          .original-price {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default JaipurPage;