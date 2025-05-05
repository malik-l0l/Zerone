 // Initialize Swiper properly
 document.addEventListener('DOMContentLoaded', function() {
    // Make sure Swiper is loaded before trying to initialize it
    if (typeof Swiper === 'undefined') {
      console.error('Swiper is not loaded. Check your script inclusion.');
      return;
    }
    
    // Initialize the Swiper with proper configuration
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1, // Default to 1 slide per view
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // Define breakpoints for responsiveness
        768: {
          slidesPerView: 2.5, // Show 2.5 slides on desktop
        },
      },
    });
    
    // Debug helper - check if Swiper initialized correctly
    if (swiper.initialized) {
      console.log('Swiper initialized successfully');
    } else {
      console.log('Swiper failed to initialize properly');
    }
  });