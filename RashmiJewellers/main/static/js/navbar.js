document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".navbar-menu");
    const navbar = document.querySelector("#mainNavbar");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Subtle navbar shadow on scroll.
    window.addEventListener("scroll", () => {
        if (!navbar) return;

        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
