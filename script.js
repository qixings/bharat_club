// Hamburger menu functionality
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-overlay').style.display = 'flex';
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-overlay').style.display = 'none';
});


// Display the popup when the page loads
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
    }, 1000); // Adjust the timeout as needed (1000ms = 1s)
};

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
