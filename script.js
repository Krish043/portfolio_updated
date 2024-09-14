  window.onload = function () {
  document.body.classList.remove("dark-mode");
};

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
  let imgL = document.getElementById("meLight");
  let imgD = document.getElementById("meDark");
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");

  let smallL = document.getElementById("meL");
  let smallD = document.getElementById("meD");
  if (imgD.style.display === "none") {
    imgD.style.display = "block";
    meD.style.display = "block";
    imgL.style.display = "none";
    meL.style.display = "none";
    sun.style.display = "block";
    moon.style.display = "none";
    document.getElementById("title").style.color = "#9754f5";
  } else {
    imgL.style.display = "block";
    meL.style.display = "block";
    imgD.style.display = "none";
    meD.style.display = "none";
    sun.style.display = "none";
    moon.style.display = "block";
    document.getElementById("title").style.color = "#ff9d00";
  }
}
const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

var typed = new Typed(".auto-type", {
  strings: ["Coder", "Developer","Programmer", "Designer"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

let scrollContainer = document.querySelector(".projects");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 945;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 935;
});

const p1 = document.querySelector("project1");
p1.addEventListener("click", function () {
  window.location.href = "https://www.youtube.com";
});