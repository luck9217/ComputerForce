document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("menu-open");
});

document.querySelector(".bag-btn").addEventListener("click", function () {
  document.querySelector("main").classList.toggle("bag-open");
});

bagButton.addEventListener("click", () => {
  aside.style.display = aside.style.display === "block" ? "none" : "block";
});
