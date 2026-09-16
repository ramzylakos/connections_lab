const partA = "she said last time, we're stuck in a time loop";
const partB = "which really pisses me off because that's what";

const container = document.getElementById('container');
const hint = document.getElementById('hint');
const lines = [];

function addLine(text, cls) {
  const p = document.createElement('p');
  p.className = 'line ' + cls;
  p.textContent = text;
  container.appendChild(p);
  lines.push(p);

  setTimeout(() => p.classList.add('in'), 10);
  if (lines.length > 2) lines[lines.length - 3].classList.add('fading');
}

let count = 0;
for (let i = 0; i < 49; i++) {
  const isPartB = i % 2 === 1;
  addLine(isPartB ? partB : partA, isPartB ? 'part-b' : 'part-a');
}
count = 48;
lines[lines.length - 2].classList.add('fading');
window.scrollTo(0, document.documentElement.scrollHeight);

document.body.onclick = () => {
  hint.style.display = 'none';
  count++;
  addLine(count % 2 ? partB : partA, count % 2 ? 'part-b' : 'part-a');
};

const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
let lastScrollY = window.scrollY;
let minuteAngle = 0;
let hourAngle = 0;

window.addEventListener('scroll', () => {
  const delta = window.scrollY - lastScrollY;
  lastScrollY = window.scrollY;

  minuteAngle += delta;
  hourAngle += delta / 12;

  minuteHand.setAttribute('transform', `rotate(${minuteAngle} 50 50)`);
  hourHand.setAttribute('transform', `rotate(${hourAngle} 50 50)`);
});