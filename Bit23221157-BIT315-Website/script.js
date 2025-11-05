function updateWelcomeMessage() {
  const now = new Date();
  document.getElementById("welcome-message").textContent =
    "The date is " + now.toLocaleString();
}
setInterval(updateWelcomeMessage, 1000);
updateWelcomeMessage();

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dotsContainer = document.getElementById("dots");
let slideInterval;

function initDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      showSlide(i);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  }
}
function showSlide(n) {
  if (slides.length === 0) return;

  slideIndex = (n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  let dots = dotsContainer.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (dots[slideIndex]) {
    dots[slideIndex].classList.add("active");
  }
}
function nextSlide() {
  showSlide(slideIndex + 1);
  resetInterval();
}
function prevSlide() {
  showSlide(slideIndex - 1);
  resetInterval();
}
function startInterval() {
  slideInterval = setInterval(() => {
    showSlide(slideIndex + 1);
  }, 4000);
}
function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}
document.addEventListener("DOMContentLoaded", () => {
  initDots();
  showSlide(0);
  startInterval();
});
