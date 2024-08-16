const btn = document.querySelector('.menu__btn');
const nav = document.querySelector('.header__menu');

btn.addEventListener('click', ()=>{
  nav.classList.toggle('header__menu-open');
});