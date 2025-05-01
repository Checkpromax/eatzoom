// script.js

// Mobile menu toggle
const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}
