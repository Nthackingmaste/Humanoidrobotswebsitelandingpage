// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal('.hero-content, .hero-image', { delay: 200, origin: 'left' });
sr.reveal('.robot-card, .tech-card, .app-item', { interval: 200 });
sr.reveal('.about-content, .about-image', { delay: 200, origin: 'bottom' });

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const interest = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        console.log({ name, email, interest, message });
        
        // Show success message
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Sticky Navigation on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.glass-nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});