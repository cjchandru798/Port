// ---- Dark Mode Persistence ----

// On page load, check localStorage and set dark mode if needed
window.addEventListener('DOMContentLoaded', () => {
  // Fade in effect
  document.body.style.opacity = 1;

  // Set dark mode from localStorage if previously enabled
  const isDark = localStorage.getItem('darkmode') === 'true';
  if (isDark) {
    document.body.classList.add('dark');
    document.getElementById('darkmode-toggle').textContent = '☀️ Light Mode';
  } else {
    document.body.classList.remove('dark');
    document.getElementById('darkmode-toggle').textContent = '🌙 Dark Mode';
  }
});

// Toggle dark mode and store preference
document.getElementById('darkmode-toggle').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('darkmode', isDark ? 'true' : 'false');
  document.getElementById('darkmode-toggle').textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// ---- Particle generator (unchanged) ----
for(let i=0;i<18;i++){
  const s = document.createElement('span');
  s.style.left = `${Math.random()*100}vw`;
  s.style.animationDuration = `${8+Math.random()*8}s`;
  s.style.width = s.style.height = `${6+Math.random()*12}px`;
  document.querySelector('.particles').appendChild(s);
}
