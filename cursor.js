const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".dot");

// Smooth follow effect
document.addEventListener("mousemove", (e) => {
    // Move the main circle slightly slower
    cursor.style.transform = `translate(${e.clientX - cursor.clientWidth / 10}px, ${e.clientY - cursor.clientHeight / 10}px)`;

    // Move the dot directly to the cursor
    dot.style.transform = `translate(${e.clientX - dot.clientWidth / 2}px, ${e.clientY - dot.clientHeight / 2}px)`;
});
