// IMAGE SLIDER
const groups = document.querySelectorAll(".slider .group");
const thumbnailsContainer = document.getElementById("thumbnails-container");
let groupIndex = 0;
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  showGroup(groupIndex);
  displayThumbnails();
}

function showGroup(index) {
  groups.forEach((group, i) => {
    if (i === index) {
      group.style.display = "block";
      slideIndex = 0; // Reset slideIndex when showing a new group
      showSlide(group, slideIndex, false); // Show first slide of the new group with "after" image hidden
    } else {
      group.style.display = "none";
    }
  });
}

function showSlide(group, index, showAfter) {
  const beforeSlide = group.querySelector(".before");
  const afterSlide = group.querySelector(".after");
  afterSlide.style.opacity = showAfter ? 1 : 0;
  beforeSlide.style.opacity = 1; // Keep "before" image visible
}

function toggleSlide(group) {
  const afterSlide = group.querySelector(".after");
  const isVisible = afterSlide.style.opacity === "1";
  const newOpacity = isVisible ? 0 : 1;

  afterSlide.style.transition = "opacity 0.5s";
  afterSlide.style.opacity = newOpacity;
}

function displayThumbnails() {
  thumbnailsContainer.innerHTML = "";
  groups.forEach((group, i) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = group.querySelector(".before").src;
    thumbnail.alt = "Thumbnail " + (i + 1);
    thumbnail.classList.add("thumbnail");
    thumbnail.addEventListener("click", () => {
      showGroup(i);
    });
    thumbnailsContainer.appendChild(thumbnail);
  });
}

groups.forEach((group) => {
  group.addEventListener("click", () => {
    toggleSlide(group);
  });
});