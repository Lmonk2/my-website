// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Toggle active class
        item.classList.toggle('active');

        // Close other FAQs if you want only one open at a time
        // Uncomment the following lines if needed
        /*
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        */
    });
});

// Testimonials Slider (Simple Swipe or Click-based Navigation could be implemented here)
// For simplicity, this example uses a horizontal scroll. Advanced sliders would require more JavaScript or a library.

// Form Submissions (Placeholder - implement backend or use services)
const contactForm = document.getElementById('contact-form');
const bookingForm = document.getElementById('booking-form');
const loginForm = document.getElementById('login-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle contact form submission
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
}

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle booking form submission
        alert('Your appointment has been booked!');
        bookingForm.reset();
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle login form submission
        alert('Login functionality is not implemented yet.');
        loginForm.reset();
    });
}
