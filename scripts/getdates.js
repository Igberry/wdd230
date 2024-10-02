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
document.addEventListener('DOMContentLoaded', function() {
    // Get the current year and set it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // Get the last modified date of the document and display it
    const lastModified = new Date(document.lastModified);

    // Ensure the last modified date is valid before displaying it
    if (!isNaN(lastModified.getTime())) {
        document.getElementById('lastModified').textContent = lastModified.toLocaleDateString();
    } else {
        document.getElementById('lastModified').textContent = "Unavailable";
    }
});
