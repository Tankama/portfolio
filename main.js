document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const nav = document.getElementById('nav');
    const navToggle = document.querySelector('.toggle-collapse');
    const navItems = document.querySelector('.nav-items');
    
    // Toggle navigation on mobile
    navToggle.addEventListener('click', () => {
        navItems.classList.toggle('active');
    });
    
    // Close navigation when clicking on a link
    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', () => {
            navItems.classList.remove('active');
        });
    });
    
    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        if (window.scrollY > 300) {
            document.querySelector('.back-to-top').classList.add('active');
        } else {
            document.querySelector('.back-to-top').classList.remove('active');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Theme switcher
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark' && themeSwitch) {
            themeSwitch.checked = true;
        }
    }
    
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', './public/js/particles.json', function() {
            console.log('Particles.js loaded');
        });
    }
});