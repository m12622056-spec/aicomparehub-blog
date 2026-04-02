// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('open');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Newsletter form
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert('Thanks for subscribing! 🎉');
      this.reset();
    }
  });
});

// Add reading progress bar
if (document.querySelector('.article-body')) {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 3px;
    background: linear-gradient(90deg, #00d4ff, #7c3aed);
    z-index: 999; transition: width 0.1s; width: 0%;
  `;
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}
