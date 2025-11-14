// IndiasGoTrip - Main JavaScript

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Search form handler
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const destination = document.getElementById('destination').value;
      const checkin = document.getElementById('checkin').value;
      const checkout = document.getElementById('checkout').value;
      const guests = document.getElementById('guests').value;
      
      // Here you would typically send this data to your backend
      console.log('Search data:', { destination, checkin, checkout, guests });
      
      alert(`Searching for trips to ${destination}!\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}`);
    });
  }

  // Set minimum date for date inputs to today
  const today = new Date().toISOString().split('T')[0];
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');
  
  if (checkinInput) {
    checkinInput.setAttribute('min', today);
    checkinInput.addEventListener('change', function() {
      if (checkoutInput) {
        checkoutInput.setAttribute('min', this.value);
      }
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
