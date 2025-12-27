// Basic JavaScript file
// This file is intentionally left blank for this basic example,
// but can be used for interactivity in the future.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Saveetha Engineering College webpage loaded.');

    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});