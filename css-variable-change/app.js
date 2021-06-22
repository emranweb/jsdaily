const color = document.querySelector(".color");

color.addEventListener("input", function () {
  document.documentElement.style.setProperty("--primary", this.value);
});

const main = document.querySelector(".header-2");

window.addEventListener("scroll", function () {
  console.log(main.scrollTop);
});
