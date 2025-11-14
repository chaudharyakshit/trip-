import React from "react";
import "../styles/testimonials.css";
import { FaStar, FaUserFriends, FaSmile, FaGlobe } from "react-icons/fa";

const Testimonials = () => {
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
              Thanks to their expert planning, our Dubai vacation was seamless.
              Every detail was handled with care.
            </p>
            <div className="card-footer">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Dimple"
                className="avatar"
              />
              <div>
                <div className="name">Dimple</div>
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
                <span className="score">4.5</span>
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
              We had an incredible Europe tour! The itinerary, bookings, and
              support were all professionally managed.
            </p>
            <div className="card-footer">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Vinay"
                className="avatar"
              />
              <div>
                <div className="name">Vinay</div>
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
                <span className="score">4.5</span>
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
              Our trip to Bali was unforgettable. Everything was perfectly
              organized from start to finish.
            </p>
            <div className="card-footer">
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Akshit"
                className="avatar"
              />
              <div>
                <div className="name">Akshit</div>
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
                <span className="score">4.5</span>
                <span className="meta">Reviews</span>
              </div>
            </div>
          </article>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon">
                <FaGlobe />
              </div>
              <div>
                <div className="stat-value">26K+</div>
                <div className="stat-label">Tour Completed</div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon">
                <FaUserFriends />
              </div>
              <div>
                <div className="stat-value">12+</div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon">
                <FaSmile />
              </div>
              <div>
                <div className="stat-value">20+</div>
                <div className="stat-label">Happy Traveler</div>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon">
                <FaSmile />
              </div>
              <div>
                <div className="stat-value">98%</div>
                <div className="stat-label">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
