import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">To More Inquiry</h3>
          <p className="footer-text">Don't hesitate Call to Goffy.</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@goffytravel.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Top Destination</h3>
          <ul className="footer-list">
            <li>Maldives Tour</li>
            <li>Bali, Indonesia Tour</li>
            <li>Thailand Tour</li>
            <li>Philippines Tour</li>
            <li>Hawaii, USA Tour</li>
            <li>Switzerland Tour</li>
            <li>New Zealand Tour</li>
            <li>Costa Rica Tour</li>
            <li>Peru (Machu Picchu)</li>
            <li>Paris, France Tour</li>
            <li>Rome, Italy Tour</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Popular Search</h3>
          <ul className="footer-list">
            <li>Adventure</li>
            <li>Hiking & Trekking</li>
            <li>Holiday Packages</li>
            <li>Flights And Hotels</li>
            <li>Honeymoon Trip</li>
            <li>Bali Vacation Package</li>
            <li>Desert Safari</li>
            <li>Last-Minute Deals</li>
            <li>Summer Vacation</li>
            <li>Wildlife Safari</li>
            <li>Dubai Luxury Tours</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-list">
            <li>About Goffy</li>
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
          <h4>Goffy Travel Agency</h4>
          <p>Styline Plaza, 5th Floor, 123 Main Street</p>
          <p>Los Angeles, CA 95001, USA</p>
        </div>
        
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Goffy Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;