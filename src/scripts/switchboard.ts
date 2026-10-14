// Texty všetkých služieb sú už v HTML (kvôli SEO a čitateľom bez JS),
// skript len prepína, ktorý istič je zapnutý a ktorý panel je vidno.
const root = document.querySelector<HTMLElement>('[data-switchboard]');

if (root) {
  const breakers = Array.from(root.querySelectorAll<HTMLButtonElement>('button[data-index]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-panel]'));

  const pick = (index: number) => {
    breakers.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
    panels.forEach((p, i) => {
      p.hidden = i !== index;
    });
  };

  breakers.forEach((b, i) => b.addEventListener('click', () => pick(i)));
}
