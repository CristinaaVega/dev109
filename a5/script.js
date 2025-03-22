// Updated image paths to match the files you have
const myImages = [
    "images/Red.jpeg",
    "images/Yellow.jpg",
    "images/orange.jpg",
    "images/pink.jpg",
    "images/white.jpg"
];

// Corresponding captions
const captions = [
    "Red Tulip",
    "Yellow Tulip",
    "Orange Tulip",
    "Pink Tulip",
    "White Tulip"
];

// Index of current image
let index = 0;
let timerSeconds = 0;

// Get elements from the DOM
const imgElement = document.getElementById("slideshow");
const captionElement = document.getElementById("caption");
const timerDisplay = document.getElementById("timer");
const autoCheckbox = document.getElementById("auto");

// Update the image and caption
function updateImage() {
    imgElement.src = myImages[index];
    imgElement.alt = captions[index];
    captionElement.textContent = captions[index];
}

// Show timer in mm:ss format
function updateTimer() {
    timerSeconds++;
    const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const seconds = String(timerSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Go to next image and reset timer
function nextImage() {
    index = (index + 1) % myImages.length;
    timerSeconds = 0;
    updateImage();
}

// Go to previous image and reset timer
function previousImage() {
    index = (index - 1 + myImages.length) % myImages.length;
    timerSeconds = 0;
    updateImage();
}

// Automatically slide if checkbox is checked
function autoSlide() {
    if (autoCheckbox.checked) {
        nextImage();
    }
}

// Button event listeners
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("previous").addEventListener("click", previousImage);

// Timer and auto-slide intervals
setInterval(updateTimer, 1000);    // Update time every second
setInterval(autoSlide, 4000);      // Check every 4 seconds if auto mode is on

// Initial load
updateImage();

