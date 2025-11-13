import React from "react";
import "../styles/TrustedCompanies.css";

const logos = [
  "/assets/images/vistara.png",
  "/assets/images/spicejet.png",
  "/assets/images/taj.png",
  "/assets/images/truejet.png",
  "/assets/images/thelalit.png",
  "/assets/images/sarovar.png",
];

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      {/* Background SVG Elements */}
      <div className="background-elements">
        <svg className="bg-plane bg-plane-1" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
        <svg className="bg-plane bg-plane-2" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
        {/* <svg className="bg-parachute bg-parachute-1" viewBox="0 0 24 24">
          <path d="M20 9c0 1.38-1.12 2.5-2.5 2.5S15 10.38 15 9s1.12-2.5 2.5-2.5S20 7.62 20 9zm-2.5-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-8.5 1c0 1.38-1.12 2.5-2.5 2.5S4 10.38 4 9s1.12-2.5 2.5-2.5S9 7.62 9 9zm-2.5-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4.5 6l-2-5-2 5h4z"/>
        </svg> */}
      </div>

      <h2>Trusted by Leading Travel Companies</h2>
      <p className="subtitle">Partnered with the best in the industry</p>

      <div className="logo-slider-container">
        <div className="logo-slider">
          <div className="logo-track">
            {logos.concat(logos).map((src, i) => (
              <div key={i} className="logo-item">
                <div className="logo-circle">
                  <img 
                    src={src} 
                    alt="Brand logo" 
                    onError={(e)=>{e.currentTarget.style.visibility='hidden'}} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;