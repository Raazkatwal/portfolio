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

var animation = bodymovin.loadAnimation({
  container: document.getElementById('animContainer'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets9.lottiefiles.com/packages/lf20_5n8yfkac.json'
})