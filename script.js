const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("music");

// Move NO button slightly (playful, not disappearing)
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const maxX = 200;
  const maxY = 80;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// YES clicked
yesBtn.addEventListener("click", () => {
  // Play Titanic instrumental
  music.src =
    "https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1";

  startConfetti();

  document.querySelector(".container").innerHTML = `
    <h1>Yayyy 💖😍</h1>
    <p class="question">
      Khushi Sharma, you just made my heart melt ❤️<br>
      Happy Valentine’s Day 💕
    </p>
  `;
});

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

function startConfetti() {
  confetti = [];
  for (let i = 0; i < 250; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 4 + 2,
      color: `hsl(${Math.random() * 360},100%,60%)`
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animate);
}
