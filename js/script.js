// Interactive features and smooth scrolling functionality

// Function for smooth scrolling
function smoothScroll(target) {
    const scrollToElement = document.querySelector(target);
    window.scrollTo({
        top: scrollToElement.offsetTop,
        behavior: 'smooth'
    });
}

// Event listener for interactive elements
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Add any additional interactivity here