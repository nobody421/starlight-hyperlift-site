document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("intro-overlay");
    const explosion = document.getElementById("intro-explosion");
    const unity = document.getElementById("intro-unity");
    
    // 50/50 Chance
    const showExplosion = Math.random() < 0.5;

    if (showExplosion) {
        explosion.classList.remove("hidden");
        // Remove overlay after explosion animation (0.8s)
        setTimeout(() => {
            overlay.classList.add("hidden");
        }, 1000);
    } else {
        unity.classList.remove("hidden");
        // Remove overlay after unity loading bar (2.5s)
        setTimeout(() => {
            overlay.classList.add("hidden");
        }, 2800);
    }
});
