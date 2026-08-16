// 过滤器交互
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.phone').forEach(phone => {
      if (filter === 'all' || phone.dataset.type === filter) {
        phone.style.display = 'flex';
      } else {
        phone.style.display = 'none';
      }
    });
  });
});
