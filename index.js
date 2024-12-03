const navbar = document.getElementById("navbar");

function checkScroll() {
  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-[#2A2930]");
  } else {
    navbar.classList.remove("bg-[#2A2930]");
    navbar.classList.add("bg-transparent");
  }
}

window.onload = checkScroll;

window.addEventListener("scroll", checkScroll);

const mbl_nav = document.querySelector("#mbl-nav");
const menu = document.querySelector(".fa-bars");
const close_menu = document.querySelector(".fa-x");
const mbl_links = document.querySelectorAll(".mbl-links");
menu.addEventListener("click", () => {
  mbl_nav.classList.remove("-right-[70rem]");
  mbl_nav.classList.add("right-0");
});
close_menu.addEventListener("click", () => {
  mbl_nav.classList.remove("right-0");
  mbl_nav.classList.add("-right-[70rem]");
});
mbl_links.forEach((e) => {
  e.addEventListener("click", () => {
    mbl_nav.classList.remove("right-0");
    mbl_nav.classList.add("-right-[70rem]");
  });
});
