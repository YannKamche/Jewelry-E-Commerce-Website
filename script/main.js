// Change button
let menuIcon = document.querySelector('.navbar-toggler-icon');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-times');
});
// active header
let topHeader = document.querySelector('.header');

let nav = document.querySelector('.navigation-wrap');
window.onscroll = () => {
    document.documentElement.scrollTop >= topHeader.getBoundingClientRect().height ? nav.classList.add('scroll-on')
    : nav.classList.remove('scroll-on')
}

// nav hide
let navLinks = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navCollapse.classList.remove('show')
    });
});

// Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();