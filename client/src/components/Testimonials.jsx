import React, { useEffect, useState } from "react";
import "../styles/testimonials.css";
import { FaStar, FaUserFriends, FaSmile, FaGlobe } from "react-icons/fa";

const Testimonials = () => {
  const [count, setCount] = useState({ tour: 0, experience: 0, happy: 0 });

  // Animate count-up when in view
  useEffect(() => {
    const handleScroll = () => {
      const stats = document.querySelector(".stats-section");
      const rect = stats.getBoundingClientRect();
      if (rect.top < window.innerHeight && count.tour === 0) {
        let i = 0;
        const interval = setInterval(() => {
          i += 1;
          setCount({ tour: i, experience: i, happy: i });
          if (i >= 100) clearInterval(interval);
        }, 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count]);

  return (
    <section className="testimonials">
      <h2 className="heading">Hear It from Travelers</h2>
      <p className="subheading">
        We go beyond just booking trips—we create unforgettable travel
        experiences that match your dreams!
      </p>

      <div className="testimonial-cards">
        <div className="card">
          <div className="rating-stars">⭐⭐⭐⭐⭐</div>
          <h3>Great Experience!</h3>
          <p>
            Thanks to their expert planning, our Dubai vacation was seamless.
            Every detail was handled with care.
          </p>
          <div className="profile">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Selina"
            />
            <div>
              <h4>Selina Henry</h4>
              <p>GoFly Traveler</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="rating-stars">⭐⭐⭐⭐⭐</div>
          <h3>Great Visitors Venue!</h3>
          <p>
            We had an incredible Europe tour! The itinerary, bookings, and
            support were all professionally managed.
          </p>
          <div className="profile">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Michael"
            />
            <div>
              <h4>Michael D Linda</h4>
              <p>GoFly Traveler</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="rating-stars">⭐⭐⭐⭐⭐</div>
          <h3>Fantastic Service!</h3>
          <p>
            Our trip to Bali was unforgettable! Everything was perfectly
            organized by the agency from start to finish.
          </p>
          <div className="profile">
            <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="Amber"
            />
            <div>
              <h4>Amber Lashley</h4>
              <p>GoFly Traveler</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <div className="review-item">
          <p className="platform">Trustpilot</p>
          <p className="stars">4.5 ⭐⭐⭐⭐☆</p>
          <p>(2K reviews)</p>
        </div>
        <div className="review-item">
          <p className="platform">Tripadvisor</p>
          <p className="stars">4.5 ⭐⭐⭐⭐☆</p>
          <p>Reviews</p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat">
          <FaGlobe className="icon" />
          <h3>{count.tour}K+</h3>
          <p>Tour Completed</p>
        </div>
        <div className="stat">
          <FaUserFriends className="icon" />
          <h3>{count.experience}+</h3>
          <p>Travel Experience</p>
        </div>
        <div className="stat">
          <FaSmile className="icon" />
          <h3>{count.happy}+</h3>
          <p>Happy Traveler</p>
        </div>
        <div className="stat">
          <FaSmile className="icon" />
          <h3>2%</h3>
          <p>Retention Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
