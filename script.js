// Smooth fade animations on scroll
const elements = document.querySelectorAll(".card, .about-box");

const reveal = () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", reveal);
