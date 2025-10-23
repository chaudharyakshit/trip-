import React from 'react';
import '../styles/banner.css';
// Import your background image
import bannerBackground from '../../public/assets/images/banner.png';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="parachute-section">
          <img 
            src="../assets/parachute.svg" 
            alt="Parachute" 
            className="parachute-image"
          />
        </div>
        
        <div className="offer-section">
          <div className="offer-tag">Limited Offer</div>
          <h2 className="offer-title">Flash 50% off all tour packages</h2>
          <button className="cta-button">Grab the Deal Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;