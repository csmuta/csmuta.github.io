const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.site-nav details').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (!details.open) return;
    document.querySelectorAll('.site-nav details').forEach((other) => {
      if (other !== details) other.open = false;
    });
  });
});
