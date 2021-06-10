const burguer = document.querySelector(".burguer");
const menu = document.querySelector(".menu-navigation");

// console.log(menu);
// console.log(burguer);

burguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != burguer
  ) {
    menu.classList.toggle("spread");
  }
});
