// scripts/main.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
document.getElementById("last-modified").textContent = document.lastModified;
document.addEventListener('DOMContentLoaded', function() {
    const visitMessageElement = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (lastVisit) {
        const timeDifference = currentVisit - lastVisit;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessageElement.textContent = "You last visited 1 day ago.";
        } else {
            visitMessageElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    }

    // Save the current visit to localStorage
    localStorage.setItem('lastVisit', currentVisit);
});
