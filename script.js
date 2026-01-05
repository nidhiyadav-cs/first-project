// Navbar link click animation
const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        alert("This feature will be available soon!");
    });
});

// Simple fade-in effect on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// App store image click animation
const appIcons = document.querySelectorAll('img[alt="App Download Logo"]');

appIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.style.transform = "scale(0.9)";
        setTimeout(() => {
            icon.style.transform = "scale(1)";
        }, 150);

        alert("Redirecting to app store...");
    });
});
