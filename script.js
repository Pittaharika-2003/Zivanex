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
/ ===== 3D Tilt + Dynamic Glow =====/
const cards = document.querySelectorAll(".why-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
});

// ===== Smooth Scroll Reveal =====
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = `all 0.8s ease ${index * 0.15}s`;
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    observer.observe(card);
});
