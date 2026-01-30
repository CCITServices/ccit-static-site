// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Close nav after clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Improve keyboard focus after smooth scroll: move focus to target section
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      // Let browser scroll first
      setTimeout(() => {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }, 300);
    }
  });
});
