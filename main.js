const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const triangle = document.getElementById("triangle");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  triangle.classList.toggle("hidden");
  triangle.classList.toggle("block");
});
