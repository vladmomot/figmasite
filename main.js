const nav = document.querySelector(".nav-menu");
const ill = document.querySelector(".illustration1");
const valpr = document.querySelector(".value-proposition");
const head = document.querySelector("header");
const btns = document.querySelector(".nav-btn-container");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  ill.classList.add("active");
  valpr.classList.add("active");
  head.classList.add("active");
  btns.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  ill.classList.remove("active");
  valpr.classList.remove("active");
  head.classList.remove("active");
  btns.classList.remove("active");
});
