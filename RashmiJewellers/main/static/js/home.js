document.addEventListener("DOMContentLoaded", () => {
    // Smooth anchor scrolling with a little offset for the floating navbar.
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();

            const top = target.getBoundingClientRect().top + window.scrollY - 25;

            window.scrollTo({
                top,
                behavior: "smooth"
            });
        });
    });

    // Reveal sections when they enter the viewport.
    const revealElements = document.querySelectorAll(
        ".collection-card, .trust-item, .review-card, .about-card, .contact-card"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
});
