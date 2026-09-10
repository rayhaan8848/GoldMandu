document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.getElementById("rashmiHero");

    if (!carouselElement || typeof bootstrap === "undefined") return;

    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
        interval: 5500,
        pause: "hover",
        touch: true,
        wrap: true
    });

    // Small entrance animation whenever the slide changes.
    carouselElement.addEventListener("slide.bs.carousel", event => {
        const nextSlide = event.relatedTarget;
        const content = nextSlide.querySelector(".hero-content");
        const product = nextSlide.querySelector(".hero-product");

        if (content) {
            content.style.animation = "none";
            requestAnimationFrame(() => {
                content.style.animation = "heroTextIn .65s ease both";
            });
        }

        if (product) {
            product.style.animation = "none";
            requestAnimationFrame(() => {
                product.style.animation = "heroProductIn .8s ease both";
            });
        }
    });
});
