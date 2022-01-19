const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
    
    nav.classList.toggle("header__nav--mobile");

    if(nav.classList.contains("header__nav--mobile")){
        hamburger.src = '../images/icon-close.svg';
    }
    else {
        hamburger.src = '../images/icon-hamburger.svg';
    }

    body.classList.toggle('overflow-hidden');
});