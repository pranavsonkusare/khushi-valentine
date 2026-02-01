const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("music");

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

yesBtn.addEventListener("click", () => {
  music.play();
  startConfetti();
  document.querySelector(".container").innerHTML = `
    <h1>Yayyy Khushi 💖</h1>
    <h2>You made me so happy ❤️</h2>
  `;
});

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 4 + 1,
      color: `hsl(${Math.random() * 360},100%,50%)`
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
