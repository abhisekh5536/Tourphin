
// Navigation menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let anchorLink of anchorLinks) {
  anchorLink.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    const initialY = window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + initialY;
    const distance = targetY - initialY;
    const duration = Math.abs(distance / 2);
    let start = null;

    const step = (timestamp) => {
      if (!start) {
        start = timestamp;
      }

      const progress = timeesta - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, initialY + distance * percent);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  });
}
