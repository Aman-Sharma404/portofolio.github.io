let nav = document.querySelector('nav');
let scrollButton = document.querySelector('.scroll-button');
window.addEventListener('scroll', () => {
    if(scrollY > 20) {
        nav.setAttribute('id', 'sticky');
        scrollButton.style.display = "block";
        menuButton.style = "color:#fff";
    } else {
        nav.setAttribute('id', '');
        scrollButton.style.display = "none";
        menuButton.style = "color:#4070f4";
    }
});

// mobile-nav
let mobileNav = document.querySelector('.mobile-nav');
let menuButton = document.querySelector('.menuButton');


let closeButton = document.querySelector('.closeButton');
let mobileNav_a = document.querySelectorAll('.mobile-nav a');

menuButton.addEventListener('click', () => {
    mobileNav.style = "margin-left:0"
    menuButton.style = "display:none"
});

closeButton.addEventListener('click', () => {
    mobileNav.style = "margin-left:-120%";
    menuButton.style = "display:block"
    mobileMenuColor();
});

mobileNav_a.forEach( (element) => {

    element.addEventListener('click', () => {
        mobileNav.style = "margin-left:-100%";
        menuButton.style = "display:block";
        mobileMenuColor();
    });
});

let section = document.querySelectorAll('section');

section.forEach( (element) => {

    element.addEventListener('click', () => {
        mobileNav.style = "margin-left:-100%";
        menuButton.style = "display:block";
        mobileMenuColor();
    })

});


const mobileMenuColor = function() {
    if(scrollY > 20) {
        menuButton.style = "color:#fff";
    } 
    else {
        menuButton.style = "color:#4070f4";
    }
}