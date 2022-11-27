const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const navUL = document.getElementById("navBarUL");
const letter = document.querySelectorAll(".letter");
const nameNavBar = document.getElementById("nameNavBar");

toggleButton.addEventListener("click", () => {
  navUL.classList.toggle("navUlResponsive");
  navWrapper.classList.toggle("navResponsive");
  nameNavBar.classList.toggle("nameResponsive");
  letter.forEach((x) => x.classList.toggle("navUlResponsive"));
});

navWrapper.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    navUL.classList.remove("navUlResponsive");
    navWrapper.classList.remove("navResponsive");
    letter.forEach((x) => x.classList.remove("navUlResponsive"));
  }
});
