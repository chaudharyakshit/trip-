import React, { useState, useEffect, useRef } from "react";
import "../styles/testimonials.css";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [tourCount, setTourCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [travelerCount, setTravelerCount] = useState(0);
  const [retentionCount, setRetentionCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter(setTourCount, 26, 2000);
          animateCounter(setExperienceCount, 12, 1800);
          animateCounter(setTravelerCount, 20, 1900);
          animateCounter(setRetentionCount, 98, 2100);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (setter, target, duration) => {
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = progress * (2 - progress);
      const current = Math.floor(easeOutQuad * target);
      setter(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Hear It from Travelers</h2>
          <p>
            We go beyond just booking trips -- we create unforgettable travel
            experiences that match your dreams!
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="testimonial-cards">
          <article className="testimonial-card">
            <div className="card-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="card-text">
              Thanks to their expert planning, our Kerala vacation was seamless.
              Every detail was handled with care.
            </p>
            <div className="card-footer">
              <img
                src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="kriti"
                className="avatar"
              />
              <div>
                <div className="name">Rohit</div>
                <div className="role">GoFly Traveler</div>
              </div>
            </div>
            <div className="card-rating-badge">
              <span className="rating-brand">Trustpilot</span>
              <div className="rating-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="half-star">☆</span>
              </div>
              <div className="rating-score">
                <span className="score">4.8</span>
                <span className="meta">(1.5K reviews)</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="card-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="card-text">
              We had an incredible Golden Triangle tour! The itinerary, bookings,
              and support were all professionally managed.
            </p>
            <div className="card-footer">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Sneha"
                className="avatar"
              />
              <div>
                <div className="name">Sneha</div>
                <div className="role">GoFly Traveler</div>
              </div>
            </div>
            <div className="card-rating-badge">
              <span className="rating-brand">Tripadvisor</span>
              <div className="rating-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="half-star">☆</span>
              </div>
              <div className="rating-score">
                <span className="score">4.7</span>
                <span className="meta">(2K reviews)</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <div className="card-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="card-text">
              Our trip to Goa was unforgettable. Everything was perfectly
              organized from start to finish.
            </p>
            <div className="card-footer">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Vinay"
                className="avatar"
              />
              <div>
                <div className="name">Vinay</div>
                <div className="role">GoFly Traveler</div>
              </div>
            </div>
            <div className="card-rating-badge">
              <span className="rating-brand">Trustpilot</span>
              <div className="rating-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="half-star">☆</span>
              </div>
              <div className="rating-score">
                <span className="score">4.9</span>
                <span className="meta">(1.2K reviews)</span>
              </div>
            </div>
          </article>
        </div>

        {/* Stats row */}
        <div className="stats-row" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-icon-circle stat-icon-yellow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className="icon-svg">
                <path d="M32 8L8 20l24 12 24-12L32 8zM8 44l24 12 24-12M8 32l24 12 24-12" stroke="currentColor" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            <div className="stat-text-wrapper">
              <div className="stat-value">{tourCount}K+</div>
              <div className="testimonial-stat-label">Tour Completed</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle stat-icon-orange">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className="icon-svg">
                <path d="M32 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 24c-8 0-16 4-16 8v4h32v-4c0-4-8-8-16-8z"/>
                <circle cx="32" cy="24" r="6" fill="currentColor"/>
              </svg>
            </div>
            <div className="stat-text-wrapper">
              <div className="stat-value">{experienceCount}+</div>
              <div className="testimonial-stat-label">Travel Experience</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle stat-icon-blue">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className="icon-svg">
                <path d="M32 12c-6 0-11 5-11 11 0 8 11 20 11 20s11-12 11-20c0-6-5-11-11-11z"/>
                <circle cx="32" cy="23" r="4" fill="white"/>
              </svg>
            </div>
            <div className="stat-text-wrapper">
              <div className="stat-value">{travelerCount}+</div>
              <div className="testimonial-stat-label">Happy Traveler</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle stat-icon-green">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" className="icon-svg">
                <path d="M32 8c-13 0-24 11-24 24s11 24 24 24 24-11 24-24S45 8 32 8zm-4 36l-10-10 3-3 7 7 15-15 3 3-18 18z"/>
              </svg>
            </div>
            <div className="stat-text-wrapper">
              <div className="stat-value">{retentionCount}%</div>
              <div className="testimonial-stat-label">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
