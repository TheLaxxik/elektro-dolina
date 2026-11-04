export {};

// Prepínač režimov. Predvolený je svetlý (bez atribútu data-theme),
// voľbu si pamätáme v localStorage. Ak je úložisko zablokované, prepínač
// funguje, len sa voľba po obnovení stránky nezachová.
const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

const isDark = () => root.dataset.theme === 'dark';

const syncLabel = () => {
  button?.setAttribute('aria-label', isDark() ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim');
};

// Prechod zapíname len na chvíľu pri kliku, nie trvalo. Pri "znížený pohyb"
// v systéme sa neanimuje vôbec.
let animTimer: number | undefined;
const animateSwitch = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.classList.add('theme-anim');
  window.clearTimeout(animTimer);
  animTimer = window.setTimeout(() => root.classList.remove('theme-anim'), 400);
};

button?.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  animateSwitch();
  if (next === 'dark') root.dataset.theme = 'dark';
  else delete root.dataset.theme;
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* úložisko nie je dostupné, voľba platí len do obnovenia stránky */
  }
  syncLabel();
});

syncLabel();