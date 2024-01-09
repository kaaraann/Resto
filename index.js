let menu = document.querySelector(".menubar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("menubar");
  navbar.classList.toggle("active");
};
