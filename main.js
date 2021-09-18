// vizam elementele DOM
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav"); //querySelector selecteaza doar un element
const menuItems = document.querySelectorAll(".menu-nav__item"); //selecteaza toate elementele cu aceasta clasa

let showMenu = false; //cream o variabila showMenu de tip boolean

menuBtn.addEventListener("click", toggleMenu); //'asculta' click-ul

//functia ce afiseaza meniul
function toggleMenu() {
  if (!showMenu) {
    // adaug clasa pe mai multe elemente pt a activa diferitele tranzitii
    hamburger.classList.add("open"); //adaugam clasa --open-- elementului cu clasa .menu-btn__burger
    nav.classList.add("open");
    menuNav.classList.add("open");
    menuItems.forEach((item) => item.classList.add("open")); //folosim "a high order array function"

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    menuItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
