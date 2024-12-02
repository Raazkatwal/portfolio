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
