// Hamburger menu functionality
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-overlay').style.display = 'flex';
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-overlay').style.display = 'none';
});

// Image slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;
const slider = document.querySelector('.slider');

function showSlide(index) {
    slider.style.transition = 'transform 0.5s ease'; // Smooth transition between slides
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Reset to the first slide after the last slide
    }
    showSlide(currentSlide);
}

function startSlider() {
    setInterval(nextSlide, 1000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', startSlider);
