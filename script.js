// Particle generator
for(let i=0;i<18;i++){
  const s = document.createElement('span');
  s.style.left = `${Math.random()*100}vw`;
  s.style.animationDuration = `${8+Math.random()*8}s`;
  s.style.width = s.style.height = `${6+Math.random()*12}px`;
  document.querySelector('.particles').appendChild(s);
}

// Dark mode toggle
const toggle = document.getElementById('darkmode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Fade in the body on load
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 1;
});
