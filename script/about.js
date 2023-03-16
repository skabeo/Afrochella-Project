const mobileMenu = document.querySelector('.hamburger');
const mobilePop = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

mobileMenu.addEventListener('click', () => {
  mobilePop.classList.remove('show');
});

closeBtn.addEventListener('click', () => {
  mobilePop.classList.add('show');
});