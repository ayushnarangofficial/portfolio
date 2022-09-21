const body = document.querySelector("body"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
sidebarOpen = document.querySelector(".sidebarOpen"),
sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
modeToggle.classList.toggle("active");
body.classList.toggle("dark");

if (!body.classList.contains("dark")) {
localStorage.setItem("mode", "light-mode");
} else {
localStorage.setItem("mode", "dark-mode");
}
});


sidebarOpen.addEventListener("click", () => {
nav.classList.add("active");
});

body.addEventListener("click", e => {
let clickedElm = e.target;

if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
nav.classList.remove("active");
}
});


var autoType = new Typed(".auto", {
  strings: ["Ayush Narang,"],
  typeSpeed: 100,
  backSpeed: 120,
  loop: true,
});
