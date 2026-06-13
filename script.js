/* ═══════════════════════════════════════════════════════
   paléX Linkhub — script.js
════════════════════════════════════════════════════════ */

// Auto-update copyright year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Staggered card entrance on load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cta-card, .product-card, .secondary-link');
  cards.forEach((card, i) => {
    card.style.animationDelay = `${0.06 + i * 0.04}s`;
  });
});
