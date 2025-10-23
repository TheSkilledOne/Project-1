const burger = document.getElementById("burgerToggle");
const menu = document.querySelector(".burger-menu");
if (burger && menu) {
  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
}
