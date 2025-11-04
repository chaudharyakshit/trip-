import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/ContactFooter';

const InnerPage1 = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  return (
    <div className="inner-page">
      <Navbar />
      

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Paris & Île-de-France</h1>
            <div className="tour-meta">
              <span>5 Days</span>
              <span>4 Nights</span>
              <span>3 Destinations</span>
            </div>
            <div className="price-tag">
              Starting from <strong>$899</strong> per person
            </div>
            <div className="hero-features">
              <div className="feature">
                <span className="icon">✓</span>
                No Booking Fee
              </div>
              <div className="feature">
                <span className="icon">✓</span>
                Best Price Ever
              </div>
              <div className="feature">
                <span className="icon">⭐</span>
                (4.5/5) based on 138 reviews
              </div>
              <div className="feature">
                <span className="icon">🌿</span>
                100% Carbon Neutral
              </div>
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
                Paris, the City of Lights, and the surrounding Île-de-France region offer a perfect blend of history, culture, luxury, and romance. Whether you're exploring iconic landmarks, indulging in French cuisine, or enjoying the charming countryside, this region has something for every traveler.
              </p>
              
              <div className="package-details">
                <div className="detail-item">
                  <span className="label">Accomodation</span>
                  <span className="value">5 Star Hotel</span>
                </div>
                <div className="detail-item">
                  <span className="label">Meals</span>
                  <span className="value">Breakfast & Dinner</span>
                </div>
                <div className="detail-item">
                  <span className="label">Transportation</span>
                  <span className="value">Taxi, Car</span>
                </div>
                <div className="detail-item">
                  <span className="label">Group Size</span>
                  <span className="value">10-20</span>
                </div>
                <div className="detail-item">
                  <span className="label">Language</span>
                  <span className="value">English, Spanish</span>
                </div>
                <div className="detail-item">
                  <span className="label">Animal</span>
                  <span className="value">Cat, Pet only</span>
                </div>
                <div className="detail-item">
                  <span className="label">Age Range</span>
                  <span className="value">18-45 (Year)</span>
                </div>
                <div className="detail-item">
                  <span className="label">Season</span>
                  <span className="value">Winter Season</span>
                </div>
                <div className="detail-item">
                  <span className="label">Category</span>
                  <span className="value">Adventure</span>
                </div>
              </div>
            </section>

            {/* Locations Section */}
            <section className="locations-section">
              <h2>Explore Locations</h2>
              <div className="locations-grid">
                <div className="location-card">
                  <div className="location-icon">🗼</div>
                  <h3>Eiffel Tower</h3>
                  <span className="duration">(02 Days)</span>
                </div>
                <div className="location-card">
                  <div className="location-icon">🏰</div>
                  <h3>Loire Valley</h3>
                  <span className="duration">(01 Days)</span>
                </div>
                <div className="location-card">
                  <div className="location-icon">🌅</div>
                  <h3>Southern France</h3>
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
                  Eiffel Tower – Skip-the-line access & breathtaking views from the summit.
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Louvre Museum – See the Mona Lisa and world-renowned masterpieces.
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Opera Garnier – Visit the stunning opera house that inspired "The Phantom of the Opera".
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  French Café & Bakery Tour – Savor croissants, macarons & espresso at historic cafés.
                </div>
                <div className="highlight-item">
                  <span className="check">✓</span>
                  Sunset Dinner Cruise on the Seine – Romantic fine dining on the river.
                </div>
              </div>
            </section>

            {/* Itinerary Section */}
            <section className="itinerary-section">
              <h2>Tour Itinerary</h2>
              <div className="itinerary-list">
                <div className="departure-point">
                  <span className="location">Paris, France</span>
                  <span className="time">Departure: 8:00 am - 8:30am</span>
                </div>
                
                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-01</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Eiffel Tower – The symbol of France</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-02</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Louvre Museum – Home of the Mona Lisa</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-03</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Notre-Dame – Iconic Gothic Cathedral</h4>
                </div>

                <div className="departure-point">
                  <span className="location">South France</span>
                  <span className="time">Departure: 8:00 am - 8:30am</span>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-04</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>South France – The symbol of France</h4>
                </div>

                <div className="day-item completed">
                  <div className="day-header">
                    <span className="day-number">Day-05</span>
                    <span className="day-status">✓</span>
                  </div>
                  <h4>Carcassonne – Walled Medieval City</h4>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="right-column">
            <div className="booking-widget">
              <div className="price-section">
                <div className="price-row">
                  <div className="original-price">$899</div>
                  <div className="current-price">$800</div>
                </div>
                <div className="price-label">Per Person</div>
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
        <Footer/>
      </div>

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
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-wrapper {
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

        .logo span {
          color: #f97316;
          font-size: 12px;
          margin-left: 5px;
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

        .help, .language {
          color: #64748b;
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

        .whatsapp {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          color: #64748b;
          text-align: right;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          background-image: url('/assets/images/inner-image1.jpg');
          color: white;
          padding: 150px 0 80px;
          margin-top: 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.2;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 48px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .tour-meta {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .tour-meta span {
          background: rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .price-tag {
          font-size: 24px;
          margin-bottom: 30px;
        }

        .price-tag strong {
          color: #fbbf24;
          font-size: 32px;
        }

        .hero-features {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
        }

        .feature .icon {
          color: #fbbf24;
        }

        /* Main Content */
        .main-content {
          padding: 60px 0;
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
        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .nav-wrapper {
            flex-direction: column;
            gap: 15px;
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

          .hero-content h1 {
            font-size: 36px;
          }

          .tour-meta {
            flex-direction: column;
            gap: 10px;
          }

          .hero-features {
            flex-direction: column;
            gap: 15px;
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
        }
      `}</style>
    </div>
  );
};

export default InnerPage1;