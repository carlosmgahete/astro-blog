document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileNavLinks = document.querySelector('.mobile-nav-links');
  
  if (hamburger && mobileNavLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('expanded');
      mobileNavLinks.classList.toggle('expanded');
    });
  }
});