// Navbar Menu Toggler
let pageHeader = document.querySelector('.page-header');
let navMenu = document.querySelector('.page-header .navbar-toggler');

let ToggleMenu = (e) => {
    e.preventDefault();
    navMenu.classList.toggle('active');
    pageHeader.classList.toggle('active');
}

navMenu.addEventListener('click', ToggleMenu);