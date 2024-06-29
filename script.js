// Hamburger menu functionality
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-overlay').style.display = 'flex';
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.hamburger-menu-overlay').style.display = 'none';
});
