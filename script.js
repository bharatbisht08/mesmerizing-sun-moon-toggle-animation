// Auto-toggle cycling between day & night
const btn = document.getElementById('theme-toggle');
let isNight = false;
function toggleTheme(forced) {
  isNight = forced !== undefined ? forced : !isNight;
  if (isNight) {
    btn.classList.add('night');
  } else {
    btn.classList.remove('night');
  }
}

// Initial state: Day. Auto-trigger to night after 0.8s, then cycle.
let tick = 0;
setTimeout(() => {
  toggleTheme(true);
  cycle();
}, 800);

function cycle() {
  setTimeout(() => {
    toggleTheme(false);
    setTimeout(() => {
      toggleTheme(true);
      cycle();
    }, 1800);
  }, 1800);
}

// Manual click still supported
btn.addEventListener('click', () => {
  toggleTheme();
});