

const nav = document.querySelector(".nav-menu");
const navBtnContainer = document.querySelector(".nav-btn-container");
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");

searchBtn.addEventListener("click", () => {
  
  
  nav.classList.add("active");
  navBtnContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
 
  nav.classList.remove("active");
  navBtnContainer.classList.remove("active");
});
