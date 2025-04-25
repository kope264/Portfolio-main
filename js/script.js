// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Save the menu state to localStorage
  const isActive = hamburger.classList.contains("active");
  localStorage.setItem("menuOpen", isActive);
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  localStorage.setItem("menuOpen", false); // Update storage on close
}

// Restore Hamburger Menu state from localStorage
const isMenuOpen = localStorage.getItem("menuOpen") === "true";
if (isMenuOpen) {
  hamburger.classList.add("active");
  navMenu.classList.add("active");
}

// Theme Toggle
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Load Theme on page load
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// Adding Current Year to Footer or Element
let myDate = document.querySelector("#datee");
const year = new Date().getFullYear();
myDate.innerHTML = year;
