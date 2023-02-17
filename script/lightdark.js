const toggleSwitchDesktop = document.querySelector("#desktop-toggle");
const toggleSwitchMobile = document.querySelector("#mobile-toggle");
const header = document.querySelector("header");
const toggleIcon = document.getElementById("toggle-icon");
const heroImageObject = document.querySelector("#hero-image-object");
const heroImage = document.querySelector("#hero-image");

function imageMode(color) {
  heroImageObject.data = `/images/hero-${color}-animated.svg`;
  heroImage.src = `/images/hero-${color}-animated-png.png `;
}

function darkMode() {
  imageMode("dark");
}

function lightMode() {
  imageMode("light");
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

toggleSwitchDesktop.addEventListener("change", switchTheme);
toggleSwitchMobile.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitchDesktop.checked = true;
    toggleSwitchMobile.checked = true;
    darkMode();
  }
}
