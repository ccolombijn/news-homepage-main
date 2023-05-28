/**
 * Open/close the menu on mobile; show offcanvas/tranverse nav
 */
const open_menu = document.querySelector('.open');
const close_menu = document.querySelector('.close');
const nav_menu = document.querySelector('.nav-menu');
const offcanvas = new bootstrap.Offcanvas('#offcanvas');

open_menu.addEventListener('click', event => {
    nav_menu.classList.remove('d-none');
    nav_menu.classList.add('offcanvas');
    nav_menu.setAttribute('style', 'visibility:unset;');
    close_menu.classList.remove('d-none');
    event.target.classList.add('d-none');
    offcanvas.show();
    document.querySelector('.offcanvas-body').append(nav_menu);
    document.querySelector('.offcanvas').classList.remove('d-none');
});

close_menu.addEventListener('click', event => {
    nav_menu.classList.add('d-none');
    nav_menu.classList.remove('offcanvas');
    nav_menu.removeAttribute('style');
    open_menu.classList.remove('d-none');
    event.target.classList.add('d-none');
    offcanvas.hide();
    document.querySelector('nav').prepend(nav_menu);
    document.querySelector('.offcanvas').classList.add('d-none');
});