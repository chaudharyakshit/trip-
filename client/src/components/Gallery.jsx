import React, { useState, useEffect, useRef } from 'react';
import '../styles/gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      alt: "Taj Mahal",
      shape: "vertical-large"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      alt: "Kerala Backwaters",
      shape: "horizontal"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      alt: "Rajasthan Desert",
      shape: "horizontal"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Goa Beaches",
      shape: "vertical-small"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      alt: "Himalayan Mountains",
      shape: "vertical-large"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      alt: "Andaman Islands",
      shape: "horizontal"
    }
  ];

  const [tripsCount, setTripsCount] = useState(0);
  const targetCount = 13000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const stepValue = targetCount / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setTripsCount(Math.min(Math.floor(stepValue * currentStep), targetCount));
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-content">
          {/* Left Content */}
          <div className="text-content">
            <h1 className="gallery-title">IndiasGoTrip Gallery</h1>
            <p className="gallery-subtitle">
              We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!
            </p>
            
            <button className="book-btn">
              Book Your Trip
            </button>
            
            <div className="stats-container" ref={statsRef}>
              <div className="stat-item">
                <span className="stat-number">
                  {isVisible ? (tripsCount / 1000).toFixed(0) + 'K+' : '0K+'}
                </span>
                <span className="stat-label">Tour Completed</span>
              </div>
            </div>
          </div>

          {/* Right Gallery Collage */}
          <div className="collage-container">
            <div className="collage-column">
              <div 
                className="collage-item vertical-large"
                onClick={() => openLightbox(galleryImages[0])}
              >
                <img src={galleryImages[0].src} alt={galleryImages[0].alt} />
                <div className="image-overlay">
                  <span>{galleryImages[0].alt}</span>
                </div>
              </div>
              
              <div 
                className="collage-item vertical-small"
                onClick={() => openLightbox(galleryImages[3])}
              >
                <img src={galleryImages[3].src} alt={galleryImages[3].alt} />
                <div className="image-overlay">
                  <span>{galleryImages[3].alt}</span>
                </div>
              </div>
            </div>
            
            <div className="collage-column">
              <div 
                className="collage-item horizontal"
                onClick={() => openLightbox(galleryImages[1])}
              >
                <img src={galleryImages[1].src} alt={galleryImages[1].alt} />
                <div className="image-overlay">
                  <span>{galleryImages[1].alt}</span>
                </div>
              </div>
              
              <div 
                className="collage-item horizontal"
                onClick={() => openLightbox(galleryImages[2])}
              >
                <img src={galleryImages[2].src} alt={galleryImages[2].alt} />
                <div className="image-overlay">
                  <span>{galleryImages[2].alt}</span>
                </div>
              </div>
              
              <div 
                className="collage-item horizontal"
                onClick={() => openLightbox(galleryImages[5])}
              >
                <img src={galleryImages[5].src} alt={galleryImages[5].alt} />
                <div className="image-overlay">
                  <span>{galleryImages[5].alt}</span>
                </div>
              </div>
            </div>
            
            <div className="collage-column">
              <div 
                className="collage-item vertical-large"
                onClick={() => openLightbox(galleryImages[4])}
              >
                <img src={galleryImages[4].src} alt={galleryImages[4].alt} />
                <div className="image-overlay">
                  <span>{galleryImages[4].alt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="lightbox-image-container">
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="lightbox-info">
                <h3>{selectedImage.alt}</h3>
              </div>
            </div>
            
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;