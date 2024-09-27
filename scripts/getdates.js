// Get the current year and populate it in the footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get the last modified date and populate it in the footer
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const hamburgerMenu = document.getElementById('hamburger-menu');
const menuItems = document.getElementById('menu-items');

hamburgerMenu.addEventListener('click', () => {
  menuItems.classList.toggle('show');
  
  // Change hamburger icon to 'X' when menu is open
  if (menuItems.classList.contains('show')) {
    hamburgerMenu.innerHTML = '&#10005;'; // X symbol
  } else {
    hamburgerMenu.innerHTML = '&#9776;'; // Hamburger symbol
  }
});


const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Toggle button text based on current mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '⚙️ Light Mode';
  } else {
    darkModeToggle.innerHTML = '⚙️ Dark Mode';
  }
});


