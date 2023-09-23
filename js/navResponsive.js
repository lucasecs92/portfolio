const navBurguer = document.querySelector("#menu_burguer");
// const navClose = document.querySelector("#menu_close");
const navUl = document.querySelector(".nav_ul");

navBurguer.addEventListener('click', clickMenu);

function clickMenu() {
    if (navUl.style.display === 'flex') {
        navUl.style.display = 'none'
    } else {
        navUl.style.display = 'flex'
    }
}
function mudouTamanho() {
     if (window.innerWidth >= 300) { 
         navUl.style.display = 'flex'
     } else {
         navUl.style.display = 'none'
     } 
}