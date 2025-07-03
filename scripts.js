//hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

//toggle the 'active' class for menu on click
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

//function to show a particular slide by index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');//hide all slides
        if (i === index) {
            slide.classList.add('active');//show the current slide
        }
    });
}

//function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;//loop back to first slide
    showSlide(currentSlide);//show the next slide
}

//initialize the first slide
showSlide(currentSlide);

//change slide every 3 seconds
setInterval(nextSlide, 3000);

//landmark image slider functionality
let currentImageIndex = 0;
const images = [
    "images/landmarks/landmark1.jpg",
    "images/landmarks/landmark2.jpg",
    "images/landmarks/landmark3.jpg",
    "images/landmarks/landmark4.jpg",
    "images/landmarks/landmark5.jpg",
    "images/landmarks/landmark6.jpg"
];
const landmarkNames = [
    "Marina Bay Sands",
    "Gardens by the Bay",
    "Sentosa Island",
    "Singapore Flyer",
    "Chinatown",
    "Singapore Zoo"
];
const landmarkDescriptions = [
    "A futuristic hotel and entertainment complex in the heart of Singapore.",
    "A nature park featuring futuristic Supertree structures.",
    "A popular resort island known for its beaches, resorts, and attractions.",
    "A giant Ferris wheel offering stunning views of the city skyline.",
    "A bustling neighborhood with vibrant markets, temples, and food.",
    "A world-renowned zoo with diverse wildlife and conservation efforts."
];

//function to update the main image, name, and description
function updateMainImage(index) {
    const mainImage = document.getElementById("main-landmark-image");
    const landmarkName = document.getElementById("landmark-name");
    const landmarkDescription = document.getElementById("landmark-description");

    //update the image, name, and description
    mainImage.src = images[index];
    landmarkName.innerText = landmarkNames[index];
    landmarkDescription.innerText = landmarkDescriptions[index];

    //update the active class on thumbnails
    document.querySelectorAll(".thumbnail").forEach((thumbnail, i) => {
        thumbnail.classList.toggle("active", i === index);
    });
}

//function to change the image by clicking on a thumbnail
function changeImage(imageSrc) {
    const index = images.indexOf(imageSrc);
    if (index !== -1) {
        currentImageIndex = index;
        updateMainImage(currentImageIndex);
    }
}

//left slider button functionality
document.querySelector(".slider-btn.left").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage(currentImageIndex);
});

//right slider button functionality
document.querySelector(".slider-btn.right").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage(currentImageIndex);
});

//add event listeners to thumbnails
document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
        changeImage(images[index]);
        currentImageIndex = index;//update the current image index
    });
});

//initialize the first image, name, and description on page load
window.onload = () => updateMainImage(currentImageIndex);
