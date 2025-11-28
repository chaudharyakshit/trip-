import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/ContactFooter.jsx';
import CursorFX from '../../components/CursorFX.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaStar,
  FaRegStar,
  FaShieldAlt,
  FaMoneyBillWave,
  FaGift,
  FaCheck,
  FaUserFriends,
  FaHotel,
  FaUsers,
  FaUser,
  FaUtensils,
  FaGlobe,
  FaCalendar,
  FaCar,
  FaPaw,
  FaMountain,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

import jaipur1 from '../../assets/packages-images/jaipur1.png';
import jaipur2 from '../../assets/packages-images/jaipur2.png';
import jaipur3 from '../../assets/packages-images/jaipur3.png';

import "swiper/css";
import "swiper/css/autoplay";
import "../../styles/destination-mobile-fix.css";
import '../../styles/jaipur-page.css'; // external stylesheet

const JaipurPage = () => {
  // Tabs
  const TABS = ['Overview', 'Itinerary', 'Included', 'Excluded', 'Map', 'FAQ'];
  const [activeTab, setActiveTab] = useState('Overview');

  // Booking form
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  // Reviews
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Amit K.', rating: 5, comment: 'Amazing experience — highly recommended!' },
    { id: 2, name: 'Sara P.', rating: 4, comment: 'Great itinerary and comfortable hotels.' },
    { id: 3, name: 'John D.', rating: 5, comment: 'Guide was very helpful and friendly.' },
  ]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  // FAQ Items
  const [faqItems] = useState([
    { q: 'What is the cancellation policy?', a: 'Free cancellation up to 7 days before departure. 50% charge within 7 days.' },
    { q: 'Are flights included?', a: 'Flights are not included. The package covers land transportation and local transfers.' },
    { q: 'Is travel insurance included?', a: 'Yes, basic travel insurance is included. You may purchase upgrades.' },
    { q: 'Is this package kid-friendly?', a: 'Yes, the itinerary can be adjusted for kids. Contact support to customize.' },
  ]);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Hero images
  const jaipurImages = [jaipur1, jaipur2, jaipur3];

  const submitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return alert('Please add name and comment.');
    const next = { id: Date.now(), ...newReview };
    setReviews(prev => [next, ...prev]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="inner-page jaipur-page">
      <CursorFX />
      <Navbar />

      {/* HERO */}
      <section className="hero-section jaipur-hero">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="hero-slider"
        >
          {jaipurImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="hero-slide">
                <img src={img} alt={`Jaipur ${i + 1}`} className="w-full h-full object-cover" />
                <div className="hero-overlay">
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* TOP BADGES + RATING */}
      <section className="banner-section">
        <div className="banner-content container">
          <div className="banner-left">
            <div className="badge no-fee">No Booking Fee</div>
            <div className="badge best-price">Best Price Ever</div>
          </div>

          <div className="banner-center">
            <div className="rating-box">
              <div className="stars">
                <FaStar className="star filled" />
                <FaStar className="star filled" />
                <FaStar className="star filled" />
                <FaStar className="star filled" />
                <FaRegStar className="star" />
              </div>
              <div className="rating-meta">
                <strong>4.5/5</strong>
                <span>— based on 138 reviews</span>
              </div>
            </div>
          </div>

          <div className="banner-right">
            <div className="badge eco">100% Carbon Neutral</div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container main-content">
        <div className="content-grid">

          {/* LEFT COLUMN */}
          <div className="left-column">
            {/* Title */}
            <div className="tour-card">
              <h2 className="tour-title">Jaipur: The Pink City Experience</h2>
              <div className="tour-meta">
                <div><FaMapMarkerAlt /> Jaipur, Rajasthan</div>
                <div><FaClock /> 5 Days 4 Nights</div>
                <div><FaUsers /> Group: 10-20</div>
              </div>
            </div>

            {/* TABS */}
            <div className="tabs-card">
              <div className="tabs-header">
                {TABS.map(tab => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="tabs-content">
                {activeTab === 'Overview' && (
                  <div className="tab-panel">
                    <h3>Overview</h3>
                    <p>
                      Jaipur, the Pink City of India, offers a perfect blend of history,
                      culture, and royal heritage. Explore monumental forts, enjoy Rajasthani
                      cuisine and shop at bustling markets. This package includes curated
                      experiences, comfortable stays, and local guides.
                    </p>

                    <div className="quick-facts-grid">
                      <div className="fact">
                        <FaHotel />
                        <div>Accommodation</div>
                        <small>5 Star Hotel</small>
                      </div>
                      <div className="fact">
                        <FaUtensils />
                        <div>Meals</div>
                        <small>Breakfast & Dinner</small>
                      </div>
                      <div className="fact">
                        <FaCar />
                        <div>Transport</div>
                        <small>Taxi / Coach</small>
                      </div>
                      <div className="fact">
                        <FaGlobe />
                        <div>Language</div>
                        <small>English</small>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Itinerary' && (
                  <div className="tab-panel">
                    <h3>Itinerary</h3>
                    <div className="itinerary-list">
                      <div className="it-day">
                        <div className="it-day-header"><strong>Day 1</strong> • Arrival & Amber Fort</div>
                        <p>Check-in, evening visit to Amber Fort with light-and-sound show.</p>
                      </div>

                      <div className="it-day">
                        <div className="it-day-header"><strong>Day 2</strong> • Hawa Mahal & City Palace</div>
                        <p>Exploration of the iconic City Palace and the famous Hawa Mahal.</p>
                      </div>

                      <div className="it-day">
                        <div className="it-day-header"><strong>Day 3</strong> • Local Market & Culture</div>
                        <p>Experience local bazaars, artisan workshops and cooking demo.</p>
                      </div>

                      <div className="it-day">
                        <div className="it-day-header"><strong>Day 4</strong> • Jantar Mantar & Leisure</div>
                        <p>Visit the astronomical observatory and relax with optional activities.</p>
                      </div>

                      <div className="it-day">
                        <div className="it-day-header"><strong>Day 5</strong> • Departure</div>
                        <p>Checkout and drop to airport/rail station.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Included' && (
                  <div className="tab-panel">
                    <h3>What's Included</h3>
                    <ul className="included-list">
                      <li><FaCheck /> 5 Star Hotel Accommodation</li>
                      <li><FaCheck /> Daily Breakfast & Dinner</li>
                      <li><FaCheck /> All Transportation & Sightseeing</li>
                      <li><FaCheck /> Professional Tour Guide</li>
                      <li><FaCheck /> All Entry Tickets</li>
                      <li><FaCheck /> Travel Insurance</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'Excluded' && (
                  <div className="tab-panel">
                    <h3>What's Not Included</h3>
                    <ul className="excluded-list">
                      <li>Airfare to/from Jaipur</li>
                      <li>Personal expenses and gratuities</li>
                      <li>Optional activities that are not listed in the itinerary</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'Map' && (
                  <div className="tab-panel">
                    <h3>Map</h3>
                    <div className="map-wrap">
                      {/* Default Jaipur Map (iframe) */}
                      <iframe
                        title="Jaipur Map"
                        src="https://www.google.com/maps?q=Jaipur,+Rajasthan,+India&output=embed"
                        loading="lazy"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                {activeTab === 'FAQ' && (
                  <div className="tab-panel">
                    <h3>Frequently Asked Questions</h3>
                    <div className="faq-accordion">
                      {faqItems.map((f, idx) => (
                        <div key={idx} className={`faq-item ${openFAQ === idx ? 'open' : ''}`}>
                          <button className="faq-q" onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}>
                            <span>{f.q}</span>
                            <span className="faq-toggle">{openFAQ === idx ? <FaChevronUp /> : <FaChevronDown />}</span>
                          </button>
                          {openFAQ === idx && <div className="faq-a">{f.a}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Gallery */}
            <div className="tour-card gallery-card">
              <h3>Photo Gallery</h3>
              <div className="gallery-grid">
                {jaipurImages.map((img, i) => (
                  <div key={i} className="gallery-item">
                    <img src={img} alt={`Gallery ${i}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="tour-card reviews-card">
              <h3>Traveller Reviews</h3>

              <div className="reviews-summary">
                <div className="avg-rating">
                  <div className="big-rating">4.5</div>
                  <div className="rating-sub">Average Rating</div>
                </div>

                <div className="reviews-list">
                  {reviews.map(r => (
                    <div className="review" key={r.id}>
                      <div className="review-head">
                        <strong>{r.name}</strong>
                        <div className="stars-small">
                          {Array.from({ length: 5 }).map((_, i) => i < r.rating ? <FaStar key={i} /> : <FaRegStar key={i} />)}
                        </div>
                      </div>
                      <p className="review-comment">{r.comment}</p>
                    </div>
                  ))}
                </div>
              </div>

              <form className="review-form" onSubmit={submitReview}>
                <h4>Write a Review</h4>
                <input
                  placeholder="Your name"
                  value={newReview.name}
                  onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                />
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview(prev => ({ ...prev, rating: Number(e.target.value) }))}
                >
                  {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                </select>
                <textarea
                  placeholder="Your review"
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                ></textarea>
                <button type="submit" className="btn btn-primary">Submit Review</button>
              </form>
            </div>

            {/* Related Packages - placeholder (replace with your import) */}
            <div className="tour-card related-card">
              <h3>You Might Also Like</h3>
              <div className="related-grid">
                {/* Replace these placeholders with your package components / imports */}
                <div className="related-item">
                  <img src={jaipur2} alt="related 1" />
                  <div className="related-info">
                    <strong>Udaipur – Lake City Tour</strong>
                    <span>₹15,999</span>
                  </div>
                </div>

                <div className="related-item">
                  <img src={jaipur3} alt="related 2" />
                  <div className="related-info">
                    <strong>Ranthambore – Jungle Safari</strong>
                    <span>₹12,999</span>
                  </div>
                </div>

                <div className="related-item">
                  <img src={jaipur1} alt="related 3" />
                  <div className="related-info">
                    <strong>Jodhpur – Blue City Adventure</strong>
                    <span>₹13,999</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter-card tour-card">
              <h3>Subscribe to Travel Deals</h3>
              <p>Get exciting offers, curated itineraries and early-bird discounts.</p>
              <div className="newsletter-form">
                <input placeholder="Your email address" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Booking & Info */}
          <div className="right-column">
            <div className="booking-widget sticky-widget">
              <div className="price-block">
                <div className="price-row">
                  <div className="price-from">Starting From</div>
                  <div className="price-amount">
                    <span className="strike">₹21,999</span>
                    <strong className="current">₹19,999</strong>
                  </div>
                  <div className="per-person">per person</div>
                </div>

                <button className="btn book-btn">
                  Book Now <FaArrowRight />
                </button>
              </div>

              <div className="guarantees">
                <div className="g-item"><FaMoneyBillWave /> Money Back Guarantee</div>
                <div className="g-item"><FaShieldAlt /> Safety First</div>
                <div className="g-item"><FaGift /> Bonus Activity Included</div>
              </div>

              <div className="booking-form">
                <label>Check Availability</label>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

                <label>Travellers</label>
                <select value={travelers} onChange={(e) => setTravelers(Number(e.target.value))}>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
                </select>

                <button className="btn btn-primary submit-enquiry">Submit an Enquiry</button>

                <div className="customize">
                  <h4>Customize Travel Package</h4>
                  <div className="customize-items">
                    <div><FaCheck /> Make your favourite package</div>
                    <div><FaCheck /> Local experiences included</div>
                    <div className="guide"><FaUserFriends /> <strong>60+</strong> Guides Available</div>
                  </div>
                  <button className="btn btn-outline">Customize Package</button>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="contact-card tour-card">
              <h4>Need Help?</h4>
              <p>Call our travel experts for personalised suggestions.</p>
              <a href="tel:+911234567890" className="call-btn">+91 12345 67890</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JaipurPage;
