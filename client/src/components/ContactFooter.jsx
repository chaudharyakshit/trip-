import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Need Help?</h3>
          <p className="footer-text">Don't hesitate — call IndiasGoTrip.</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>+91 86079 98882</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>hello@indiasgotrip.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Top Destination</h3>
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
            <li>Manali Snow Tour</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Popular Search</h3>
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
          <h3 className="footer-title">Resources</h3>
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
      </div>
      
      <div className="footer-bottom">
        <div className="footer-address">
          <h4>IndiasGoTrip</h4>
          <p>123 MG Road</p>
          <p>New Delhi, India</p>
        </div>
        
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
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} IndiasGoTrip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
