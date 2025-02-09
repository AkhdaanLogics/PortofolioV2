// Toggle menu
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlink");
var links = document.querySelector(".navlink li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Page transition
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("page-transition");
});

// Scroll to Top Button
const scrollBtn = document.createElement('div');
scrollBtn.classList.add('scroll-to-top');
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});