document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleMenu');
  const navList = document.getElementById('navList');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 60; // header offset
        window.scrollTo({ top, behavior: 'smooth' });
        navList.classList.remove('open');
      }
    });
  });
});
