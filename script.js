// Toggle Menu
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlink");
var links = document.querySelector(".navlink li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Typed.js
var typed = new Typed(".input", {
    strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 60,
    backSpeed: 55,
    loop: true
});

// Get all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navlink li a');

// Function to update active navigation based on scroll position
function updateNav() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for header
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current section's link
            document.querySelector(`.navlink li a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updateNav);

// Update nav on page load
document.addEventListener('DOMContentLoaded', updateNav);

// Add click event listeners to nav links for smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});