/* ============================================================
   屏幕切换逻辑
   ============================================================ */
const navItems = document.querySelectorAll('.nav-item');
const screenPages = document.querySelectorAll('.screen-page');

function goScreen(name) {
  // 隐藏所有页面
  screenPages.forEach(p => { p.style.display = 'none'; });
  // 显示目标页面
  const target = document.querySelector(`.screen-page[data-page="${name}"]`);
  if (target) {
    target.style.display = 'block';
    // 滚动回顶部
    document.getElementById('screen').scrollTop = 0;
  }
  // 更新导航高亮
  navItems.forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-screen="${name}"]`);
  if (navItem) navItem.classList.add('active');
}

// 导航点击
navItems.forEach(item => {
  item.addEventListener('click', () => {
    goScreen(item.dataset.screen);
  });
});

// 初始化:展示首页
goScreen('home');

// URL hash 支持
window.addEventListener('hashchange', () => {
  const hash = location.hash.replace('#', '');
  if (hash) goScreen(hash);
});
if (location.hash) {
  goScreen(location.hash.replace('#', ''));
}

// 切换 toggle
document.addEventListener('click', (e) => {
  if (e.target.closest('.toggle')) {
    const t = e.target.closest('.toggle');
    t.classList.toggle('on');
  }
});
