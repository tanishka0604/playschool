// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Spawn floating balloons
const sky = document.getElementById('sky');
const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#B5FFFC', '#FFF5BA'];

function spawnBalloon() {
  const b = document.createElement('div');
  b.className = 'balloon';
  b.style.left = Math.random() * 100 + 'vw';
  b.style.background = colors[(Math.random() * colors.length) | 0];
  // random duration & size for variety
  const dur = 12 + Math.random() * 16; // 12s to 28s
  b.style.animationDuration = dur + 's';
  const scale = 0.7 + Math.random() * 0.9; // 0.7x to 1.6x
  b.style.transform = `scale(${scale})`;
  sky.appendChild(b);

  // remove when finished to avoid DOM bloat
  b.addEventListener('animationend', () => b.remove());
}

function startBalloons() {
  // initial batch
  for (let i = 0; i < 14; i++) setTimeout(spawnBalloon, i * 300);
  // continuous gentle stream
  setInterval(spawnBalloon, 1200);
}
startBalloons();

// (Optional) ping backend health in console so you know API is up
fetch('http://localhost:5000/api/health')
  .then(r => r.json())
  .then(d => console.log('API:', d))
  .catch(() => console.log('API not running yet — start the server to enable.'));

  // 🌸 GSAP Animations for Hero Section

// Animate Clouds (infinite floating effect)
gsap.to(".cloud", {
  x: 100,
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Animate Hero Text
gsap.from(".hero-content h1", {
  y: -50,
  opacity: 0,
  duration: 1.5,
  ease: "bounce.out"
});

gsap.from(".hero-content .tagline", {
  x: -100,
  opacity: 0,
  delay: 0.5,
  duration: 1.2,
  ease: "power2.out"
});

gsap.from(".hero-content .safe", {
  x: 100,
  opacity: 0,
  delay: 1,
  duration: 1.2,
  ease: "power2.out"
});

// Animate Inquiry Form
gsap.from(".inquiry-form", {
  scale: 0.5,
  opacity: 0,
  delay: 1.2,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
});


