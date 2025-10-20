//Responsive menu

function responsiveMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav");

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    mobileMenu.textContent = "✕";
  } else {
    mobileMenu.textContent = "☰";
  }

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      mobileMenu.textContent = "☰";
    });
  });
}

// Scroll animation

const fadeElements = document.querySelectorAll(".fade-in");

const checkFade = () => {
  fadeElements.forEach((e) => {
    const rect = e.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8;
    if (isVisible) {
      e.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth",
    });
  });
});
