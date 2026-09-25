const menuButton = document.getElementById("menu__button");
const closeButton = document.getElementById("close__button");
const mobileMenu = document.getElementById("mobile__menu");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.add("open");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("open");
});