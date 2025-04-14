document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.grow-on-click').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.add('clicked');
        setTimeout(() => {
          el.classList.remove('clicked');
          // Add redirect logic here if needed
        }, 400);
      });
    });
  
    const pinkSection = document.getElementById('pink-section');
    window.addEventListener('scroll', () => {
      const rect = pinkSection.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2) {
        pinkSection.classList.add('pink-expanded');
      }
    });
  });
  