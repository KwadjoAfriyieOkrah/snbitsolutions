// Updated JavaScript
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
// Toggle mobile menu with smooth animation
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "auto";
});
// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      // Only close on mobile
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});
// Close menu when clicking outside or scrolling
document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".navbar") &&
    navMenu.classList.contains("active")
  ) {
    closeMenu();
  }
});
// Close menu on scroll
window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("active")) {
    closeMenu();
  }
});
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.style.overflow = "auto";
}
// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
    closeMenu();
  }
});
