const nav = document.querySelector(".header__nav");
const menuBtn = document.querySelector(".header__menu-toggle");
const list = document.querySelector(".header__list");
const burgerImg = document.querySelector(".header__hamburger img");

if (nav && menuBtn && burgerImg) {
  menuBtn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  const isOpen = nav.classList.toggle("is-open");

  document.body.classList.toggle("menu-open", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);
  menuBtn.setAttribute("aria-expanded", isOpen);

  burgerImg.setAttribute(
    "src",
    isOpen ? "/assets/images/close.png" : "/assets/images/hamburger.png",
  );
}
