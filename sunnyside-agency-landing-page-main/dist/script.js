const nav = document.querySelector(".header__list");
const menu = document.querySelector(".header__menu");

menu.addEventListener("click", () => {
    if(nav.classList.contains('header__list--active')){
        nav.classList.remove('header__list--active');
    } else {
        nav.classList.add('header__list--active');
    }
});