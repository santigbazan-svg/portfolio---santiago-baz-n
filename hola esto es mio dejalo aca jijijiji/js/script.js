//==========================================
// NAVBAR AL HACER SCROLL
//==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#090d14";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
        navbar.style.backdropFilter = "blur(10px)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});



//==========================================
// MENÚ RESPONSIVE
//==========================================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



//==========================================
// CERRAR MENÚ AL HACER CLICK
//==========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});