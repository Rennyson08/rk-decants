const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const perfume = btn.parentElement.dataset.name;
    const msg = encodeURIComponent(
      `Olá! Quero comprar o decant do perfume ${perfume}.`
    );
    window.open(`https://wa.me/5575998775662?text=${msg}`, '_blank');
  });
});
