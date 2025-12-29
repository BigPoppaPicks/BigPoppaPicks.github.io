// Animates the ROI number in the hero section
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('roi-number');
  if (!el) return;
  const end = parseFloat(el.textContent);
  let start = 0;
  const duration = 1200;          // ms
  const step = (t) => {
    const progress = Math.min(t / duration, 1);
    el.textContent = (start + (end - start) * progress).toFixed(1) + '%';
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
});
