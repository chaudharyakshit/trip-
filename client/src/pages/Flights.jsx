import React, { useState, useEffect } from 'react';
import '../styles/Flights.css';
import imgMumbai from '../assets/images/Mumbai.webp';
import imgGoa from '../assets/images/Goa.webp';
import imgJaipur from '../assets/images/jaipur.webp';
import imgVaranasi from '../assets/images/Varanasi.webp';
import imgLeh from '../assets/images/Ladakh.webp';
import imgKutch from '../assets/images/Rann-of-Kutch,-Gujarat.webp';
import ContactFooter from '../components/ContactFooter.jsx';
import { 
  FaPlane, 
  FaStar, 
  FaExchangeAlt, 
  FaUserFriends,
  FaCalendarAlt,
  FaSearch,
  FaFilter,
  FaChevronRight,
  FaClock,
  FaTag,
  FaCheck,
  FaRegHeart,
  FaSortAmountDown,
  FaChevronDown,
  FaMapMarkerAlt,
  FaGlobe,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaArrowRight,
  FaInfoCircle
} from 'react-icons/fa';

const Flights = () => {
  const [tripType, setTripType] = useState('round');
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });
  const [cabinClass, setCabinClass] = useState('economy');
  const [activeRoute, setActiveRoute] = useState('DEL-MUM');
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [fromInput, setFromInput] = useState('Delhi (DEL)');
  const [toInput, setToInput] = useState('Mumbai (BOM)');

  // Popular routes with images
  const popularRoutes = [
    { id: 'DEL-MUM', from: 'Delhi', to: 'Mumbai', code: 'DEL → BOM', price: 'Price on request', image: imgMumbai, tag: 'Business Hub' },
    { id: 'DEL-VNS', from: 'Delhi', to: 'Varanasi', code: 'DEL → VNS', price: 'Price on request', image: imgVaranasi, tag: 'Spiritual City' },
    { id: 'DEL-LEH', from: 'Delhi', to: 'Leh', code: 'DEL → IXL', price: 'Price on request', image: imgLeh, tag: 'Mountain Retreat' },
    { id: 'DEL-AHD', from: 'Delhi', to: 'Ahmedabad', code: 'DEL → AMD', price: 'Price on request', image: imgKutch, tag: 'Gateway to Kutch' },
    { id: 'DEL-JAI', from: 'Delhi', to: 'Jaipur', code: 'DEL → JAI', price: 'Price on request', image: imgJaipur, tag: 'Pink City' },
    { id: 'DEL-GOI', from: 'Delhi', to: 'Goa', code: 'DEL → GOI', price: 'Price on request', image: imgGoa, tag: 'Beach Paradise' },
  ];

  // Flight data
  const flightsData = [
    {
      id: 1,
      airline: 'Air India',
      logoColor: '#FF671F',
      departure: { time: '08:30', code: 'DEL', city: 'Delhi' },
      arrival: { time: '11:00', code: 'BOM', city: 'Mumbai' },
      duration: '2h 30m',
      stops: 'Non-stop',
      price: 4500,
      baggage: 'Cabin + Checked',
      rating: 4.2,
      bestDeal: true,
      departureTerminal: 'T3',
      arrivalTerminal: 'T2'
    },
    {
      id: 2,
      airline: 'IndiGo',
      logoColor: '#E01A4F',
      departure: { time: '14:20', code: 'DEL', city: 'Delhi' },
      arrival: { time: '16:50', code: 'BOM', city: 'Mumbai' },
      duration: '2h 30m',
      stops: 'Non-stop',
      price: 4200,
      baggage: 'Cabin only',
      rating: 4.5,
      bestDeal: false,
      departureTerminal: 'T1',
      arrivalTerminal: 'T2'
    },
    {
      id: 3,
      airline: 'Vistara',
      logoColor: '#19488E',
      departure: { time: '10:15', code: 'DEL', city: 'Delhi' },
      arrival: { time: '12:45', code: 'BOM', city: 'Mumbai' },
      duration: '2h 30m',
      stops: 'Non-stop',
      price: 5200,
      baggage: 'Cabin + Checked',
      rating: 4.7,
      bestDeal: true,
      departureTerminal: 'T3',
      arrivalTerminal: 'T2'
    },
    {
      id: 4,
      airline: 'SpiceJet',
      logoColor: '#F15A29',
      departure: { time: '19:45', code: 'DEL', city: 'Delhi' },
      arrival: { time: '22:15', code: 'BOM', city: 'Mumbai' },
      duration: '2h 30m',
      stops: 'Non-stop',
      price: 3800,
      baggage: 'Cabin only',
      rating: 4.0,
      bestDeal: false,
      departureTerminal: 'T1',
      arrivalTerminal: 'T2'
    }
  ];

  // Hero Background Images
  const heroImages = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ];

  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Rotate hero background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const HeroSection = () => (
    <div className="flights-hero">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Book Flights, Hotels & Holiday Packages</h1>
            <p>Get Up To ₹2000 OFF* on International Flights</p>
            
            <div className="hero-tags">
              <span className="hero-tag"><FaCheck /> No Cost EMI</span>
              <span className="hero-tag"><FaCheck /> Free Cancellation</span>
              <span className="hero-tag"><FaCheck /> Best Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Indicators */}
      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentHeroImage ? 'active' : ''}`}
            onClick={() => setCurrentHeroImage(index)}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="hero-stats">
        <div className="stat-item">
          <FaGlobe />
          <div>
            <h3>100+</h3>
            <p>Destinations</p>
          </div>
        </div>
        <div className="stat-item">
          <FaPlane />
          <div>
            <h3>500+</h3>
            <p>Airlines</p>
          </div>
        </div>
        <div className="stat-item">
          <FaStar />
          <div>
            <h3>4.8/5</h3>
            <p>Customer Rating</p>
          </div>
        </div>
        <div className="stat-item">
          <FaInfoCircle />
          <div>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </div>
  );

  const PopularRoutes = () => (
    <div className="popular-routes">
      <div className="section-header">
        <h2><FaMapMarkerAlt /> Popular Routes from Delhi</h2>
        <p>Book flights to your favorite destinations at best prices</p>
      </div>
      
      <div className="routes-grid">
        {popularRoutes.map(route => (
          <div 
            key={route.id}
            className={`route-card ${activeRoute === route.id ? 'active' : ''}`}
            onClick={() => setActiveRoute(route.id)}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${route.image ? route.image : `https://source.unsplash.com/400x300/?${route.image || 'travel'},india,city`})`
            }}
          >
            <div className="route-tag">{route.tag}</div>
            <div className="route-info">
              <h3>{route.from} to {route.to}</h3>
              <div className="route-details">
                <span className="route-code">{route.code}</span>
                <span className="route-price">{route.price}</span>
              </div>
              <div className="route-icons">
                {route.tag.includes('Beach') && <FaUmbrellaBeach />}
                {route.tag.includes('Mountain') && <FaMountain />}
                {route.tag.includes('City') && <FaCity />}
              </div>
            </div>
            <button
              className="route-book-btn"
              onClick={(e) => {
                e.stopPropagation();
                const msg = encodeURIComponent(`Hi, I'm interested in flights from ${route.from} to ${route.to}. Please share the pricing details.`);
                window.open(`https://wa.me/919695947578?text=${msg}`, '_blank');
              }}
            >
              Book Now <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const FlightSearchForm = () => (
    <div className="flight-search-form">
      <div className="search-tabs">
        <button className={`tab-btn ${tripType === 'round' ? 'active' : ''}`} onClick={() => setTripType('round')}>
          <FaExchangeAlt /> Round trip
        </button>
        <button className={`tab-btn ${tripType === 'oneway' ? 'active' : ''}`} onClick={() => setTripType('oneway')}>
          <FaPlane /> One way
        </button>
        <button className={`tab-btn ${tripType === 'multi' ? 'active' : ''}`} onClick={() => setTripType('multi')}>
          <FaPlane className="multi-icon" /> Multi-city
        </button>
      </div>

      <div className="search-fields">
        <div className="field-group">
          <label>FROM</label>
          <div className="input-with-icon">
            <FaPlane className="field-icon takeoff" />
            <input
              type="text"
              placeholder="City or airport"
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
            />
            <span className="field-hint">Indira Gandhi International</span>
          </div>
        </div>

        <button className="swap-button">
          <FaExchangeAlt />
        </button>

        <div className="field-group">
          <label>TO</label>
          <div className="input-with-icon">
            <FaPlane className="field-icon landing" />
            <input
              type="text"
              placeholder="City or airport"
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
            />
            <span className="field-hint">Chhatrapati Shivaji Maharaj</span>
          </div>
        </div>

        <div className="field-group date-group">
          <label>DEPARTURE</label>
          <div className="date-input">
            <FaCalendarAlt className="field-icon" />
            <div className="date-display">
              <span className="date-day">y</span>
              <span className="date-date">y</span>
            </div>
            <button className="date-picker-btn">Change</button>
          </div>
        </div>

        <div className="field-group date-group">
          <label>RETURN</label>
          <div className={`date-input ${tripType === 'oneway' ? 'disabled' : ''}`}>
            <FaCalendarAlt className="field-icon" />
            <div className="date-display">
              <span className="date-day">z</span>
              <span className="date-date">z</span>
            </div>
            <button className="date-picker-btn" disabled={tripType === 'oneway'}>Change</button>
          </div>
        </div>

        <div className="field-group passengers-group">
          <label>TRAVELLERS & CLASS</label>
          <div 
            className="input-with-icon"
            onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
          >
            <FaUserFriends className="field-icon" />
            <input 
              type="text" 
              readOnly 
              value={`${passengers.adults + passengers.children} Traveller${(passengers.adults + passengers.children) > 1 ? 's' : ''}, ${cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}`} 
            />
            
            {showPassengerDropdown && (
              <div className="passengers-dropdown">
                <div className="passenger-row">
                  <div>
                    <strong>Adults</strong>
                    <small>12+ years</small>
                  </div>
                  <div className="counter">
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setPassengers({...passengers, adults: Math.max(1, passengers.adults - 1)})
                    }}>-</button>
                    <span>{passengers.adults}</span>
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setPassengers({...passengers, adults: passengers.adults + 1})
                    }}>+</button>
                  </div>
                </div>
                <div className="passenger-row">
                  <div>
                    <strong>Children</strong>
                    <small>2-11 years</small>
                  </div>
                  <div className="counter">
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setPassengers({...passengers, children: Math.max(0, passengers.children - 1)})
                    }}>-</button>
                    <span>{passengers.children}</span>
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setPassengers({...passengers, children: passengers.children + 1})
                    }}>+</button>
                  </div>
                </div>
                <div className="passenger-row">
                  <div>
                    <strong>Infants</strong>
                    <small>Under 2</small>
                  </div>
                  <div className="counter">
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setPassengers({...passengers, infants: Math.max(0, passengers.infants - 1)})
                    }}>-</button>
                    <span>{passengers.infants}</span>
                    <button onClick={(e) => {
                      e.stopPropagation();
                      setPassengers({...passengers, infants: passengers.infants + 1})
                    }}>+</button>
                  </div>
                </div>
                <div className="cabin-class">
                  <div className="class-label">CHOOSE CLASS</div>
                  <div className="class-buttons">
                    <button className={cabinClass === 'economy' ? 'active' : ''} onClick={() => setCabinClass('economy')}>Economy</button>
                    <button className={cabinClass === 'premium' ? 'active' : ''} onClick={() => setCabinClass('premium')}>Premium Economy</button>
                    <button className={cabinClass === 'business' ? 'active' : ''} onClick={() => setCabinClass('business')}>Business</button>
                    <button className={cabinClass === 'first' ? 'active' : ''} onClick={() => setCabinClass('first')}>First Class</button>
                  </div>
                </div>
                <button 
                  className="apply-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPassengerDropdown(false);
                  }}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="search-options">
        <div className="options-left">
          <label className="checkbox-option">
            <input type="checkbox" defaultChecked />
            <span>Student Fare</span>
          </label>
          <label className="checkbox-option">
            <input type="checkbox" />
            <span>Armed Forces</span>
          </label>
          <label className="checkbox-option">
            <input type="checkbox" />
            <span>Senior Citizen</span>
          </label>
        </div>
        <div className="options-right">
          <button className="add-nearby-btn">+ Add Nearby Airports</button>
        </div>
      </div>

      <button
        className="search-button"
        onClick={() => {
          const msg = encodeURIComponent(`Hi, I want to search flights from ${fromInput} to ${toInput}`);
          window.open(`https://wa.me/919695947578?text=${msg}`, '_blank');
        }}
      >
        <FaSearch />
        SEARCH FLIGHTS
      </button>
    </div>
  );

  const FlightCard = ({ flight }) => (
    <div className={`flight-card ${flight.bestDeal ? 'best-deal' : ''}`}>
      {flight.bestDeal && (
        <div className="best-deal-badge">
          <FaTag /> FLIGHT DEAL
        </div>
      )}
      
      <div className="flight-header">
        <div className="airline-info">
          <div className="airline-logo" style={{ backgroundColor: flight.logoColor }}>
            {flight.airline.charAt(0)}
          </div>
          <div className="airline-details">
            <h3>{flight.airline}</h3>
            <div className="flight-meta">
              <span className="rating">
                <FaStar /> {flight.rating}
              </span>
              <span className="terminal">Depart: T{flight.departureTerminal}</span>
            </div>
          </div>
        </div>
        <div className="header-right">
          <button className="save-flight">
            <FaRegHeart /> Save
          </button>
          <div className="flight-refund">
            <FaCheck /> Free Cancellation
          </div>
        </div>
      </div>

      <div className="flight-details">
        <div className="flight-segment departure">
          <div className="time">{flight.departure.time}</div>
          <div className="airport">
            <strong>{flight.departure.code}</strong>
            <span>{flight.departure.city}</span>
            <small>Terminal {flight.departureTerminal}</small>
          </div>
        </div>

        <div className="flight-route">
          <div className="duration">
            <FaClock /> {flight.duration}
          </div>
          <div className="route-line">
            <div className="line"></div>
            <FaPlane className="plane-icon" />
          </div>
          <div className="stops">{flight.stops}</div>
        </div>

        <div className="flight-segment arrival">
          <div className="time">{flight.arrival.time}</div>
          <div className="airport">
            <strong>{flight.arrival.code}</strong>
            <span>{flight.arrival.city}</span>
            <small>Terminal {flight.arrivalTerminal}</small>
          </div>
        </div>

        <div className="flight-baggage">
          <div className="baggage-info">
            <FaCheck className="check-icon" /> {flight.baggage}
          </div>
          <div className="meal-info">Meal Included</div>
        </div>
      </div>

      <div className="flight-footer">
        <div className="price-section">
          <div className="price">Price on request</div>
          <div className="price-details">
            <span className="price-note">per person</span>
            <span className="price-savings">Save ₹500</span>
          </div>
        </div>
        <div className="footer-right">
          <button className="view-details-btn">View Details</button>
          <button
            className="select-flight"
            onClick={(e) => {
              e.stopPropagation();
              const msg = encodeURIComponent(`Hi, I'm interested in this flight: ${flight.airline} ${flight.departure.code} -> ${flight.arrival.code}. Please share pricing and availability.`);
              window.open(`https://wa.me/919695947578?text=${msg}`, '_blank');
            }}
          >
            Book Now <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
    return (  
      <div className="flights-container">
        <HeroSection />
        
        <div className="main-container">
          <div className="search-container">
            <FlightSearchForm />
          </div>

          <PopularRoutes />

          <div className="results-container">
            <div className="results-header">
              <div className="header-left">
                  <h2>
                    <FaPlane /> Delhi to Mumbai Flights
                    <span className="date-range"> • y - z • {passengers.adults + passengers.children} Traveller(s)</span>
                  </h2>
                  <p className="results-count">Showing 4 out of 124 flights</p>
                </div>
              <div className="results-controls">
                <button className="filter-btn">
                  <FaFilter /> FILTERS
                </button>
                <button className="sort-btn">
                  <FaSortAmountDown /> SORT BY: <span>Price <FaChevronDown /></span>
                </button>
              </div>
            </div>

            <div className="flights-grid">
              {flightsData.map(flight => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>

            <div className="results-footer">
              <div className="footer-left">
                <p>Fares are round trip per adult including all taxes and fees</p>
                <p className="disclaimer">*Additional baggage charges may apply</p>
              </div>
              <div className="footer-right">
                <button className="show-more">LOAD MORE FLIGHTS</button>
                <button className="need-help">Need Help?</button>
              </div>
            </div>
          </div>
        </div>
        <ContactFooter />
      </div>
    );
  return (
    <div className="flights-container">
      <HeroSection />
      
      <div className="main-container">
        <div className="search-container">
          <FlightSearchForm />
        </div>

        <PopularRoutes />

        <div className="results-container">
          <div className="results-header">
            <div className="header-left">
                <h2>
                  <FaPlane /> Delhi to Mumbai Flights
                  <span className="date-range"> • y - z • {passengers.adults + passengers.children} Traveller(s)</span>
                </h2>
                <p className="results-count">Showing 4 out of 124 flights</p>
              </div>
            <div className="results-controls">
              <button className="filter-btn">
                <FaFilter /> FILTERS
              </button>
              <button className="sort-btn">
                <FaSortAmountDown /> SORT BY: <span>Price <FaChevronDown /></span>
              </button>
            </div>
          </div>

          <div className="flights-grid">
            {flightsData.map(flight => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>

          <div className="results-footer">
            <div className="footer-left">
              <p>Fares are round trip per adult including all taxes and fees</p>
              <p className="disclaimer">*Additional baggage charges may apply</p>
            </div>
            <div className="footer-right">
              <button className="show-more">LOAD MORE FLIGHTS</button>
              <button className="need-help">Need Help?</button>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default Flights;