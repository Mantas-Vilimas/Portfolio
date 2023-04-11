const burgerBtn = document.querySelector(".burger-button");
const burgerLinks = document.querySelector("#burger-links");
const burgerMenuOverlay = document.querySelector("#overlay");
const header = document.querySelector("header");

let menuOpen = false;

const alert = () => {
  alert(
    "Currently working on this project. Sorry that you have to see unfinished product"
  );
};

alert();

burgerBtn.addEventListener("click", function () {
  if (!menuOpen) {
    burgerBtn.classList.add("open");
    burgerLinks.classList.add("visible-burger");
    menuOpen = true;
  } else {
    burgerBtn.classList.remove("open");
    burgerLinks.classList.remove("visible-burger");
    menuOpen = false;
  }
});

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});
