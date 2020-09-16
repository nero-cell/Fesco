'use strict';

let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let menuLink = document.querySelectorAll('.header__link');

burger.onclick = function() {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';

    let div = document.createElement('div');

    div.classList.add('header__close');
    menu.append(div);
    menu.onclick = function() {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    };
};

document.addEventListener('click', menuLock);

function menuLock(event) {
    let close = document.querySelector('.header__close');

    if (!event.target.closest('.header__menu') && 
        menu.getBoundingClientRect().x < document.body.offsetWidth) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
}