// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Grab form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Log data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Show full-screen success overlay
    const successOverlay = document.getElementById('successOverlay');
    successOverlay.style.display = 'flex';

    // Clear form after submission
    document.getElementById('contactForm').reset();

    // Hide success overlay after 5 seconds (optional)
    setTimeout(function() {
        successOverlay.style.display = 'none';
    }, 700); // Hide after 5 seconds
});
