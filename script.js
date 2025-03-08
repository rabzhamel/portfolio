// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const burgerLines = document.querySelectorAll('.burger div');
    
    if (burger) {
        burger.addEventListener('click', function() {
            // Toggle navigation
            nav.classList.toggle('active');
            
            // Animate burger
            burgerLines.forEach(line => {
                line.classList.toggle('active');
            });
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                burgerLines.forEach(line => {
                    line.classList.remove('active');
                });
            }
        });
    });
    
    // Enhanced Scroll Animation with staggered delays
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition < windowHeight - 100) {
                // Add active class to trigger the animation
                element.classList.add('active');
            }
        });
    };
    
    // Run animation check on load
    setTimeout(animateOnScroll, 300);
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
}); 