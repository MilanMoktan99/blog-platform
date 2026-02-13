const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".nav-menu");

let menuOpen = false;

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuOpen = !menuOpen;
    menuIcon.src = menuOpen ? "/assets/icons/close.png" : "/assets/icons/menu.png";
});





