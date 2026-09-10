document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");
    const timeElement = document.getElementById("current-time");

    function updateDateTime() {
        const now = new Date();

        if (dateElement) {
            dateElement.textContent = now.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            });
        }

        if (timeElement) {
            timeElement.textContent = now.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            });
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 30000);
});
