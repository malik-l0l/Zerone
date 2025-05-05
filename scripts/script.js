document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const navbarToggler = document.querySelector('.navbar-toggler');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // Toggle navigation on mobile
    navbarToggler.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent document click from immediately closing the menu
        nav.classList.toggle('show');
        navbarToggler.setAttribute('aria-expanded', nav.classList.contains('show'));
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                event.preventDefault();
                
                // Get target element
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate header height to offset scroll position
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target) || navbarToggler.contains(event.target);
        
        if (!isClickInside && nav.classList.contains('show')) {
            nav.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Add shadow to header on scroll and handle active navigation
    window.addEventListener('scroll', function() {
        // Add shadow to header when scrolled
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Set active navigation link based on scroll position
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Handle window resize to reset mobile menu state
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('show')) {
            nav.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
    
    
});