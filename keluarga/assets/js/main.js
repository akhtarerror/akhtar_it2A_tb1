let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.textContent = "menu";
  menu.classList.toggle("active");
  navbar.classList.toggle("active");
};
