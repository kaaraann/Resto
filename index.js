let menu = document.querySelector(".menubar");
let navbar = document.querySelector(".navbaar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  console.log("clicked");
};
