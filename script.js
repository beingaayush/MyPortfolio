
// for the loop TYPING animation
var typed = new Typed(".text",{
    strings:["Web Application Developer", "Mern Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100, 
    backDelay:1000,
    loop:true
});


// responsive design - toggle btn
function toggleMenu() {
    document.body.classList.toggle("menu-active");
}


// toggle auto close
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Toggle menu open/close
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("open");
        menuToggle.classList.toggle("active");
    });
});


