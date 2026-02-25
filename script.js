// Scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {
        const linkPage = link.getAttribute("href").split("#")[0];

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

        // Highlight home when on index with hash
        if(currentPage === "index.html" && link.getAttribute("href").includes("#home")){
            if(window.location.hash === "" || window.location.hash === "#home"){
                link.classList.add("active");
            }
        }
    });

});

// Active link on click
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", function () {
        navItems.forEach(link => link.classList.remove("active"));
        this.classList.add("active");

        // Close mobile menu after click
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});
document.querySelectorAll('a[href^="#"]')

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        window.location.href = link;
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);

let hero = document.querySelector("#home");
let nextSection = document.querySelector("#what"); // change to your next section id
let scrolled = false;

hero.addEventListener("wheel", function(e){
    if(!scrolled && e.deltaY > 0){
        scrolled = true;
        nextSection.scrollIntoView({behavior:"smooth"});
    }
});
