const navUl = document.querySelector(".nav_ul");
const menu = document.querySelector(".menu");
const burguerIcon = document.querySelector(".menuBurgerIcon");
const closeIcon = document.querySelector(".closeIcon");

burguerIcon.addEventListener('click', clickShowMenu);
menu.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", clickRemoveMenu);

function clickShowMenu() {
    if (navUl.style.display === 'flex'){
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'flex';
    }
}
function clickRemoveMenu() {
    if (navUl.style.display === 'flex'){
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'flex';
    }
}
// Função para mudar o ícone do hamburguer para o ícone de fechar
function toggleMenu() {
   if (navUl.classList.contains("showMenu")) {
     navUl.classList.remove("showMenu");
     closeIcon.style.display = "none";
     burguerIcon.style.display = "flex";
   } else {
     navUl.classList.add("showMenu");
     closeIcon.style.display = "flex";
     burguerIcon.style.display = "none";
   }
}  

//-----------------------------------------------

// const navBurguer = document.querySelector(".menuIcon");
// // const navClose = document.querySelector("#menu_close");
// const navUl = document.querySelector(".nav_ul");

// navBurguer.addEventListener('click', clickMenu);

// function clickMenu() {
//     if (navUl.style.display === 'flex') {
//         navUl.style.display = 'none'
//     } else {
//         navUl.style.display = 'flex'
//     }
// }
// function mudouTamanho() {
//      if (window.innerWidth >= 300) { 
//          navUl.style.display = 'flex'
//      } else {
//          navUl.style.display = 'none'
//      } 
// }