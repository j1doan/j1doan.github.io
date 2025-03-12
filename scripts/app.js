'use strict';

// Hamburger Menu Logic
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

function toggleMenu() {
    const isExpanded = hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Toggle menu on hamburger click
hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Close menu after clicking link
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Submission Handling
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
    // Example: Send data to server
});