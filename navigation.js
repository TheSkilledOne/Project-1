const menuIcon = document.querySelector(".menuIcon");
const burgerMenu = document.querySelector(".burger-menu");

menuIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("show-menu");
});
