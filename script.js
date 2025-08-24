const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const body = document.body;

// Create overlay dynamically
const overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);

// Toggle menu
hamburger.addEventListener("click", () => {
  menu.style.display = "inline-flex";
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
  menu.style.display = "none";
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// Close when clicking a menu link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// Optional: close menu with Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }
});
