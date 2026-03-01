document.addEventListener("DOMContentLoaded", function () {

const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

/* Header scroll efecto */
window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* Menu móvil */
if(menuToggle){
    menuToggle.addEventListener("click", function(){
        nav.classList.toggle("active");
    });
}

/* Reveal animation */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    reveals.forEach(function(el){
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* Contadores */
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 200;

            function updateCount(){
                if(count < target){
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
            observer.unobserve(counter);
        }
    });
},{ threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

});