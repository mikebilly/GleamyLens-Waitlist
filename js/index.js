// IMAGE SLIDER
const groups = document.querySelectorAll(".slider .group");
const thumbnailsContainer = document.getElementById("thumbnails-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

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
      showSlide(group, slideIndex); // Show first slide of the new group
    } else {
      group.style.display = "none";
    }
  });
}

function showSlide(group, index) {
  const slides = group.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
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
  const slides = group.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      slideIndex = (slideIndex + 1) % slides.length; // Cycle through slides in the group
      showSlide(group, slideIndex);
    });
  });
});
