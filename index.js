
var autoType = new Typed(".auto", {
  strings: ["Ayush Narang,"],
  typeSpeed: 100,
  backSpeed: 120,
  loop: true,
});


const scrollAnimation = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  reset: true
});

scrollAnimation.reveal('.main-one', {delay:100, origin: 'left'});
scrollAnimation.reveal('.main-two', {delay:170, origin: 'right'});
scrollAnimation.reveal('.projects-info', {delay:100, origin: 'left'});
scrollAnimation.reveal('.row-one', {delay:170, origin: 'left'});
scrollAnimation.reveal('.row-two', {delay:170, origin: 'right'});
scrollAnimation.reveal('.about-one', {delay:100, origin: 'left'});
scrollAnimation.reveal('.about-two', {delay:100, origin: 'right'});
scrollAnimation.reveal('.contact', {delay:100, origin: 'top'});



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

