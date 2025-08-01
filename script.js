const hamburger = document.querySelector(".hamburger");
const menu_bar = document.querySelector(".navbar-menu .menu-bar");

if (hamburger && menu_bar) {
  hamburger.addEventListener("click", () => {
    menu_bar.classList.toggle("show");
  });

  document.querySelectorAll(".navbar-menu .menu-bar a").forEach(link => {
    link.addEventListener("click", () => {
      menu_bar.classList.remove("show");
    });
  });
}
