document.querySelector("header > div").addEventListener("click", () => {
  document.body.classList.toggle("active");
});
document.querySelector(".hide-event").addEventListener("click", () => {
  document.body.classList.remove("active");
});