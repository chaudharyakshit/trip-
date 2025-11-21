import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/ContactFooter.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CursorFX from "../../components/CursorFX.jsx";

// Import images for Kutch
import kutch1 from '../../assets/destination-images/Rann of Kutch, Gujarat.webp';
import kutch2 from '../../assets/destination-images/Rann of Kutch, Gujarat1.webp';
import kutch3 from '../../assets/destination-images/Rann of Kutch, Gujarat2.webp';

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/destination-mobile-fix.css";

const KutchPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  const kutchImages = [kutch1, kutch2, kutch3];

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
          {kutchImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide">
                <img
                  src={img}
                  alt={`Kutch ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="container main-content">
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* About Section */}
            <section className="about-section">
              <h2>About Tour Package</h2>
              <p>
                Kutch, India's largest district, is a land of stark beauty and vibrant culture known for its white salt desert, traditional handicrafts, and rich heritage. The Great Rann of Kutch transforms into a magical white landscape during winter, while the region's colorful villages showcase exquisite embroidery, bandhani textiles, and metalwork. From the spectacular Rann Utsav to ancient forts and wildlife sanctuaries, Kutch offers a unique blend of natural wonders and cultural experiences.
              </p>
              
              <div className="package-details">
                <div className="detail-item">
                  <span className="label">Accommodation</span>
                  <span className="value">4 Star Resort & Tents</span>
                </div>
                <div className="detail-item">
                  <span className="label">Meals</span>
                  <span className="value">Breakfast & Dinner</span>
                </div>
                <div className="detail-item">
                  <span className="label">Transportation</span>
                  <span className="value">Car, Jeep</span>
                </div>
                <div className="detail-item">
                  <span className="label">Group Size</span>
                  <span className="value">10-20</span>
                </div>
                <div className="detail-item">
                  <span className="label">Language</span>
                  <span className="value">English, Hindi, Gujarati</span>
                </div>
                <div className="detail-item">
                  <span className="label">Activities</span>
                  <span className="value">Desert Safari, Cultural Shows</span>
                </div>
                <div className="detail-item">
                  <span className="label">Age Range</span>
                  <span className="value">18-60 (Year)</span>
                </div>
                <div className="detail-item">
                  <span className="label">Season</span>
                  <span className="value">Winter Season (Oct-Mar)</span>
                </div>
                <div className="detail-item">
                  <span className="label">Category</span>
                  <span className="value">Cultural, Adventure, Nature</span>
                </div>
              </div>
            </section>

            {/* Locations Section */}
            <section className="locations-section">
              <h2>Explore Locations</h2>
              <div className="locations-grid">
                <div className="location-card">
                  <div className="location-icon">🏜️</div>
                  <h3>Great Rann of Kutch</h3>
                  <span className="duration">(02 Days)</span>
                </div>
                <div className="location-card">
                  <div className="location-icon">🕌</div>
                  <h3>Kutch Desert Wildlife Sanctuary</h3>
                  <span className="duration">(01 Days)</span>
                </div>
                <div className="location-card">
                  <div className="location-icon">🏰</div>
                  <h3>Prag Mahal & Aina Mahal</h3>
                  <span className="duration">(01 Days)</span>
                </div>
              </div>
            </section>

            {/* Highlights Section */}
            <section className="highlights-section">
              <h2>Highlights of the Tour</h2>
              <div className="highlights-list">
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Great Rann of Kutch – Vast white salt desert under moonlight
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Rann Utsav – Cultural festival with traditional music and dance
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Kutch Handicrafts – Famous embroidery, bandhani and silver work
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Kala Dungar – Highest point in Kutch with panoramic views
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Traditional Cuisine – Authentic Kutchi food and local delicacies
                </div>
              </div>
            </section>

            {/* Itinerary Section */}
            <section className="itinerary-section">
              <h2>Tour Itinerary</h2>
              <div className="itinerary-list">
                <div className="departure-point">
                  <span className="location">Kutch, Gujarat</span>
                  <span className="time">Departure: 6:00 am - 6:30am</span>
                </div>
                
                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-01</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Great Rann of Kutch – White desert exploration and sunset</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-02</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Rann Utsav – Cultural festival experience and traditional shows</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-03</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Handicraft Villages – Visit to Bhujodi and nearby craft centers</h4>
                </div>

                <div className="departure-point">
                  <span className="location">Bhuj City</span>
                  <span className="time">Departure: 8:00 am - 8:30am</span>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-04</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Prag Mahal & Aina Mahal – Historic palaces and architecture</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-05</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Kutch Desert Wildlife Sanctuary – Flamingo watching and nature</h4>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="right-column">
            <div className="booking-widget">
              <div className="price-section">
                <a href="https://wa.me/919695947578?text=Hi, I'm interested in this tour package. Please share the pricing details." target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors inline-block text-center w-full">
                  Price on Request
                </a>
              </div>

              <div className="guarantees">
                <div className="guarantee-item">
                  <span className="icon">☉</span>
                  Money Back Guarantee.
                </div>
                <div className="guarantee-item">
                  <span className="icon">🛡️</span>
                  Your Safety Is Our Top Priority.
                </div>
              </div>

              <div className="booking-form">
                <div className="form-group">
                  <label>Check Availability</label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Number of Travelers</label>
                  <select 
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="form-input"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                <button className="submit-btn primary">
                  Submit an Enquiry ✗
                </button>

                <div className="bonus-notice">
                  <span className="icon">☉</span>
                  Bonus Activity Included – Limited Time!
                </div>
              </div>

              <div className="customize-section">
                <h3>Customize Travel Package!</h3>
                <div className="customize-features">
                  <div className="feature-item">
                    <span className="checkbox">☑</span>
                    Make Your Favourite Package
                  </div>
                  <div className="feature-item">
                    <span className="checkbox">☑</span>
                    Enjoy Your Trip
                  </div>
                </div>
                <div className="guide-count">
                  <strong>60+</strong> Guide Await to Help You
                </div>
                <button className="customize-btn">
                  Customize Package 2
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

        /* Header Styles - Full Width */
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

        /* Hero Section with Slider - Full Width */
        .hero-section {
          margin-top: 0;
          padding: 0;
          position: relative;
          height: 500px;
          overflow: hidden;
          width: 100%;
        }

        .hero-slider {
          width: 100%;
          height: 100%;
        }

        .hero-slide {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
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

        /* Main Content */
        .main-content {
          padding: 20px 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        /* Left Column Styles */
        .left-column section {
          background: white;
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .left-column h2 {
          color: #1e293b;
          margin-bottom: 20px;
          font-size: 24px;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 10px;
          font-weight: 600;
        }

        .about-section p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 15px;
        }

        .package-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .label {
          color: #64748b;
          font-weight: 500;
          font-size: 14px;
        }

        .value {
          color: #1e293b;
          font-weight: 600;
          font-size: 14px;
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
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          margin-bottom: 20px;
          border: 1px solid #e2e8f0;
        }

        .price-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 8px;
        }

        .original-price {
          font-size: 24px;
          color: #94a3b8;
          text-decoration: line-through;
        }

        .current-price {
          font-size: 42px;
          color: #2563eb;
          font-weight: 700;
        }

        .price-label {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
        }

        .guarantees {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          color: #475569;
          font-size: 14px;
        }

        .guarantee-item:last-child {
          margin-bottom: 0;
        }

        .guarantee-item .icon {
          color: #f97316;
          font-weight: bold;
        }

        .booking-form {
          background: white;
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #374151;
          font-weight: 500;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.3s;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: #2563eb;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
          margin-bottom: 15px;
        }

        .submit-btn:hover {
          background: #1d4ed8;
        }

        .bonus-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #f97316;
          font-weight: 500;
          text-align: center;
          font-size: 14px;
        }

        .bonus-notice .icon {
          font-weight: bold;
        }

        .customize-section {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .customize-section h3 {
          color: #1e293b;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 600;
        }

        .customize-features {
          margin-bottom: 20px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #475569;
          justify-content: center;
          font-size: 14px;
        }

        .checkbox {
          color: #10b981;
          font-weight: bold;
        }

        .guide-count {
          color: #2563eb;
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .guide-count strong {
          font-size: 20px;
        }

        .customize-btn {
          background: #f97316;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 14px;
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
          .nav {
            gap: 20px;
          }
          
          .header-actions {
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .nav-wrapper {
            flex-direction: column;
            gap: 15px;
            padding: 15px 20px;
          }

          .nav {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .header-actions {
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero-section {
            height: 400px;
          }

          .hero-slide {
            height: 400px;
          }

          .package-details {
            grid-template-columns: 1fr;
          }

          .locations-grid {
            grid-template-columns: 1fr;
          }

          .departure-point {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .booking-widget {
            position: static;
          }

          .header {
            position: relative;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 300px;
          }

          .hero-slide {
            height: 300px;
          }

          .current-price {
            font-size: 32px;
          }

          .original-price {
            font-size: 20px;
          }

          .nav {
            gap: 10px;
          }

          .nav a {
            font-size: 12px;
          }

          .header-actions {
            flex-direction: column;
            gap: 10px;
          }

          .whatsapp {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default KutchPage;
