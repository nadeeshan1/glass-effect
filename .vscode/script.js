// Background Slideshow
function initBackgroundSlideshow() {
    const backgrounds = document.querySelectorAll('.hero-bg');
    let currentBg = 0;

    function nextBackground() {
        backgrounds[currentBg].classList.remove('active');
        currentBg = (currentBg + 1) % backgrounds.length;
        backgrounds[currentBg].classList.add('active');
    }

    // Change background every 4 seconds
    setInterval(nextBackground, 4000);
}

// Initialize background slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', initBackgroundSlideshow);

// Typing Animation
const typed = new Typed('#typed', {
    strings: [
        'Strength Training',
        'Cardio Workouts',
        'Yoga Classes',
        'Personal Training'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Scroll Reveal Animations
ScrollReveal().reveal('.hero-content', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('.feature-card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    duration: 1000
});

ScrollReveal().reveal('.class-card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    duration: 1000
});

ScrollReveal().reveal('.price-card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200,
    duration: 1000
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('authModal');
    const joinBtns = document.querySelectorAll('.join-btn, .cta-btn');
    const closeModal = document.querySelector('.close-modal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Open modal for both Join Now and Get Started buttons
    joinBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTab = document.querySelector('.tab-content.active');
            const clickedTabId = btn.getAttribute('data-tab');
            const targetTab = document.getElementById(clickedTabId);
            
            if (currentTab === targetTab) return;

            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Determine slide direction
            const isMovingRight = Array.from(tabBtns).indexOf(btn) > 
                Array.from(tabBtns).indexOf(document.querySelector('.tab-btn.active'));

            // Animate current tab out
            currentTab.style.transform = isMovingRight ? 'translateX(-100%)' : 'translateX(100%)';
            currentTab.style.opacity = '0';
            
            // After a brief delay, animate new tab in
            setTimeout(() => {
                currentTab.classList.remove('active');
                targetTab.classList.add('active');
                targetTab.style.transform = 'translateX(0)';
                targetTab.style.opacity = '1';
            }, 300);
        });
    });

    // Form submission
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log('Form submitted:', formObject);
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}); 