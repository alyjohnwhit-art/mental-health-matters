/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

function revealElements() {
    const reveals = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


/* ===========================
   BACK TO TOP BUTTON
=========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});