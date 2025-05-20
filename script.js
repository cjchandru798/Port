// ---------- Page Fade-Out Transition ----------
function fadeOutPage(url) {
  document.body.style.transition = 'opacity 0.5s';
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

// ---------- Dark Mode Toggle with localStorage ----------
const darkToggle = document.getElementById('darkmode-toggle');
const body = document.body;

function setDarkMode(on) {
  if (on) {
    body.classList.add('dark');
    localStorage.setItem('darkmode', 'on');
    if (darkToggle) darkToggle.textContent = '☀️ Light Mode';
  } else {
    body.classList.remove('dark');
    localStorage.setItem('darkmode', 'off');
    if (darkToggle) darkToggle.textContent = '🌙 Dark Mode';
  }
}

// On load, set dark mode if user had it enabled
if (localStorage.getItem('darkmode') === 'on') {
  setDarkMode(true);
} else {
  setDarkMode(false);
}

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    setDarkMode(!body.classList.contains('dark'));
  });
}

// ---------- Navigation Links with Page Fade ----------
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const url = this.getAttribute('href');
    // If it's an anchor link on the same page, do smooth scroll
    if (url.startsWith('#')) {
      const target = document.querySelector(url);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (url && !url.startsWith('http')) {
      // For internal navigation, fade out before changing page
      e.preventDefault();
      fadeOutPage(url);
    }
    // For external links (http/https), let them open normally
  });
});

// ---------- Social Link Click Animation ----------
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 150);
  });
});

// ---------- Fade In on Page Load ----------
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 1;
});
