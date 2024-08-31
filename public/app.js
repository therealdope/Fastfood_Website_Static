//----------------------------------------------Staring scrolling video

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const text2 = intro.querySelector("h2");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 2500, //length of video to show
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

// Define the first text animation
const textAnim = TweenMax.fromTo(text, 2.5, { opacity: 1 }, { opacity: 0 });

// Create a ScrollMagic scene for the first text animation
let scene2 = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

// Define the second text animation
const textAnim2 = TweenMax.fromTo(text2, 1, { opacity: 0 }, { opacity: 1 });

// Create a ScrollMagic scene for the second text animation, but delay its start
let scene3 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim2)
  .addTo(controller)
  // Set a delay for scene3 to start after scene2 completes
  .offset(1500); // Adjust the offset as per your requirements

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);

//--------------------------------------------------------navbar toggle menu

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  hamburger.classList.remove("invisible");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  hamburger.classList.add("invisible");
});

//-------------------------------------------------------------menubar

function showContent(itemName) {
  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    content.style.display = "none";
  });

  var contentToShow = document.getElementById(itemName);
  if (contentToShow) {
    contentToShow.style.display = "block";
  }
}

var items = document.querySelectorAll(".menu__item");

items.forEach(function (item) {
  item.addEventListener("click", function () {
    items.forEach(function (item) {
      item.classList.remove("text-[#FFD369]");
    });

    this.classList.add("text-[#FFD369]");
  });
});

//---------------------------------------------------------------Dark Mode
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

//----------------------------------------------------------------Scroll UP
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 3500) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

//-----------------------------------------------------------------CHANGE BORDER OF HEADER
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 3265) {
    header.classList.add("border-b", "border-[#FFD369]");
    header.classList.remove('hidden');
  } else {
    header.classList.remove("border-b", "border-[#FFD369]");
    header.classList.add('hidden');
  }
};
window.addEventListener("scroll", scrollHeader);

//------------------------------------------------------------SCROLL SECTIONS ACTIVE LINK
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-[#FFD369]");
    if (item.href.includes(current)) {
      item.classList.add("text-[#FFD369]");
    }
  });
};

window.addEventListener("scroll", activeLink);

//-----------------------------------------------------------SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 100,
  reset: true,
});

sr.reveal("#start_pg", { origin: "bottom", reset: false});
sr.reveal("#header", { origin: "top"});
sr.reveal("#home", { origin: "bottom"});
sr.reveal("#menu", { origin: "bottom"});
sr.reveal("#order", { origin: "bottom"});
sr.reveal("#review", { origin: "bottom"});
sr.reveal("#contact", { origin: "bottom"});
sr.reveal("#footer", { origin: "bottom"});
