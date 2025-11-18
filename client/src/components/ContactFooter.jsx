import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '/assets/images/Indiasgotrip-logo.png';

const Footer = () => {
  const [email, setEmail] = useState({ firstName: '', lastName: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>IndiasGoTrip</h2>
          <img src={logo} alt="IndiasGoTrip Logo" className="footer-logo-img" />
        </div>

        <div className="footer-section">
          <h3 className="footer-title">TOP DESTINATION</h3>
          <ul className="footer-list">
            <li>Goa Beach Tour</li>
            <li>Jaipur Heritage Tour</li>
            <li>Ladakh Adventure Tour</li>
            <li>Kerala Backwaters Tour</li>
            <li>Agra & Taj Mahal Tour</li>
            <li>Udaipur Lake City Tour</li>
            <li>Varanasi Spiritual Tour</li>
            <li>Delhi City Tour</li>
            <li>Mumbai Gateway Tour</li>
            <li>Shimla Hill Station Tour</li>
            <li>Coorg Coffee Hills Tour</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">POPULAR SEARCH</h3>
          <ul className="footer-list">
            <li>Adventure Tours</li>
            <li>Himalayan Trekking</li>
            <li>India Holiday Packages</li>
            <li>Flights And Hotels</li>
            <li>Honeymoon Packages</li>
            <li>Rajasthan Tour Package</li>
            <li>Thar Desert Safari</li>
            <li>Weekend Getaways</li>
            <li>Summer Hill Stations</li>
            <li>Wildlife Safari India</li>
            <li>Golden Triangle Tours</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">RESOURCES</h3>
          <ul className="footer-list">
            <li>About IndiasGoTrip</li>
            <li>Health & Safety Measure</li>
            <li>Visa Processing</li>
            <li>Customize Tour</li>
            <li>Travel Inspirations</li>
            <li>Traveler Reviews</li>
            <li>Terms & Condition</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-section subscribe-section">
          <h3 className="footer-title">SUBSCRIBE</h3>
          <p className="subscribe-text">Get the IndiasGoTrip Newsletter!</p>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input type="text" placeholder="First Name" value={email.firstName} onChange={(e) => setEmail({...email, firstName: e.target.value})} />
            <input type="text" placeholder="Last Name" value={email.lastName} onChange={(e) => setEmail({...email, lastName: e.target.value})} />
            <div className="email-input-wrapper">
              <input type="email" placeholder="your@email.com" value={email.email} onChange={(e) => setEmail({...email, email: e.target.value})} required />
              <button type="submit" aria-label="Subscribe">→</button>
            </div>
          </form>
        </div>

        <div className="footer-section contact-section">
          <h3 className="footer-title">CONTACT US</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>+91 95239 18425</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@indaisgo.com</span>
            </div>
          </div>
        </div>

        <div className="footer-section social-section">
          <h3 className="footer-title">FOLLOW US</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/share/17fuQ8xYnP/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/indiasgotrip/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/indiasgo1/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-address">
          <h4>IndiasGoTrip</h4>
          <p>123 MG Road, New Delhi, India</p>
        </div>
        <p>&copy; {new Date().getFullYear()} IndiasGoTrip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
