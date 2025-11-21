import React, { useState, useEffect, useRef } from "react";
import "../styles/services.css";

// Import images
import sikkimImage from "../assets/card-images/Sikkim.png";
import darjeeling from "../assets/card-images/darjeeling.png";

// SVG Icons
const HotelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10H6V16H8V10ZM18 10H10V16H18V10ZM22 6V18C22 18.53 21.79 19.04 21.41 19.41C21.04 19.79 20.53 20 20 20H4C3.47 20 2.96 19.79 2.59 19.41C2.21 19.04 2 18.53 2 18V6C2 5.47 2.21 4.96 2.59 4.59C2.96 4.21 3.47 4 4 4H20C20.53 4 21.04 4.21 21.41 4.59C21.79 4.96 22 5.47 22 6Z" fill="currentColor"/>
  </svg>
);

const DestinationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
  </svg>
);

const VisaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
  </svg>
);

const TourIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z" fill="currentColor"/>
    <path d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" fill="currentColor"/>
  </svg>
);

const PackageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8C21 7.45 20.78 6.95 20.41 6.59L15.41 1.59C15.05 1.21 14.55 1 14 1H4C2.9 1 2 1.9 2 3V17C2 18.1 2.9 19 4 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H20.5C20.78 17 21 16.78 21 16.5V16ZM15 3.5L18.5 7H15V3.5ZM4 3H13V7H4V3ZM20 17H4V9H20V17Z" fill="currentColor"/>
  </svg>
);

const AdventureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 12.59L13.42 11.51C13.22 11.31 13.22 10.99 13.42 10.79L14.5 9.71C14.89 9.32 15 8.83 15 8.38C15 7.93 14.89 7.44 14.5 7.05L11.95 4.5C10.78 3.34 9.04 3.35 7.88 4.51L4.5 7.89C3.34 9.05 3.35 10.79 4.51 11.95L7.05 14.5C7.44 14.89 7.93 15 8.38 15C8.83 15 9.32 14.89 9.71 14.5L10.79 13.42C10.99 13.22 11.31 13.22 11.51 13.42L12.59 14.5C13.48 15.39 14.83 15.39 15.71 14.5C16.6 13.62 16.6 12.27 15.71 11.38L14.5 12.59ZM5 21H19C19.55 21 20 20.55 20 20C20 19.45 19.55 19 19 19H5C4.45 19 4 19.45 4 20C4 20.55 4.45 21 5 21Z" fill="currentColor"/>
  </svg>
);

/* -------------------- SERVICE ITEM -------------------- */
const Service = ({ icon, title, subtitle }) => (
  <div className="service-box">
    <div className="service-icon">{icon}</div>
    <div className="service-content">
      <div className="service-title">{title}</div>
      <div className="service-subtitle">{subtitle}</div>
    </div>
  </div>
);

/* ---------------------- COUNTER ----------------------- */
const Counter = ({ end, duration, label, sublabel }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="counter-box">
      <div className="counter-number">{count}+</div>
      <div className="counter-label">
        <div className="counter-label-main">{label}</div>
        <div className="counter-label-sub">{sublabel}</div>
      </div>
    </div>
  );
};

/* ------------------ MAIN COMPONENT ------------------ */
export default function SmartServices() {
  const services = [
    { title: "Hotel Booking", subtitle: "Best stays", icon: <HotelIcon /> },
    { title: "Top Destinations", subtitle: "Handpicked", icon: <DestinationIcon /> },
    { title: "Visa Processing", subtitle: "Hassle free", icon: <VisaIcon /> },
    { title: "Tour Experiences", subtitle: "Guided trips", icon: <TourIcon /> },
    { title: "Customize Package", subtitle: "Your way", icon: <PackageIcon /> },
    { title: "Adventure Travel", subtitle: "Thrilling", icon: <AdventureIcon /> },
  ];

  return (
    <section className="smartservices-section">
      {/* Background decorative circles */}
      <div className="smartservices-bg">
        <div className="smartservices-bg-circle bg-secondary"></div>
        <div className="smartservices-bg-circle bg-primary"></div>
      </div>

      <div className="smartservices-container">
        
        {/* LEFT CONTENT */}
        <div className="smartservices-content">
          <h2 className="smartservices-title">
            Your Trustpoint, <span className="brand-name">Indiasgo</span>
          </h2>
          <h3 className="smartservices-subtitle">Best for Travel Agency.</h3>

          <p className="smartservices-text">
            At Indiasgo Travel Agency, we are passionate about creating exceptional travel experiences. 
            Whether you're looking for a relaxing beach vacation, an adventurous trek, a luxurious getaway, 
            or a cultural expedition.
          </p>

          <Counter end={12} duration={2} label="YEARS" sublabel="of Experience" />

          <div className="services-wrapper">
            <div className="services-heading">We Provide Smart Services</div>

            <div className="services-grid">
              {services.map((service, idx) => (
                <Service key={idx} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="images-section">
          <div className="images-container">
            <div className="image-card card-small">
              <img src={darjeeling} alt="Darjeeling" className="img-small" />
            </div>
            
            <div className="image-card card-large">
              <img src={sikkimImage} alt="Sikkim" className="img-large" />
            </div>

            {/* Center arrow */}
            <div className="middle-arrow-container">
              <svg className="middle-arrow" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
                <path d="M25 24L35 30L25 36" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}