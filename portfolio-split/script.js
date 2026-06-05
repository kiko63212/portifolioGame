// Atualiza o ano no rodapé
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll para links âncora
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Efeito sonoro visual: pisca o botão ao clicar
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.style.transition = 'none';
      btn.style.transform = 'translate(4px,4px)';
      btn.style.boxShadow = 'none';
      setTimeout(() => {
        btn.style.transition = '';
        btn.style.transform = '';
        btn.style.boxShadow = '';
      }, 120);
    });
  });
});
