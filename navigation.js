document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("burgerToggle");
  var menu = document.querySelector(".burger-menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }
});
