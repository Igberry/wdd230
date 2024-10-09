// Toggle navigation menu in mobile view
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
  
hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Handle the dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
