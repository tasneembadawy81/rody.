const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", function () {
    surprise.classList.remove("hidden");
    surpriseBtn.style.display = "none";
});


const photos = [
    "images/WhatsApp Image 2026-09-16 at 9.04.32 PM.jpeg",
    "images/WhatsApp Image 2026-09-16 at 9.04.33 PM.jpeg",
    "images/WhatsApp Image 2026-09-16 at 9.04.34 PM.jpeg",
    "images/WhatsApp Image 2026-09-16 at 9.04.35 PM.jpeg",
    "images/WhatsApp Image 2026-09-16 at 9.04.44 PM.jpeg",
    "images/WhatsApp Image 2026-09-16 at 9.05.09 PM.jpeg"
];

let currentPhoto = 0;

const sliderImage = document.getElementById("sliderImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", function () {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    sliderImage.src = photos[currentPhoto];
});

prevBtn.addEventListener("click", function () {
    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    sliderImage.src = photos[currentPhoto];
    sliderImage.style.animation = "none";
sliderImage.offsetHeight;
sliderImage.style.animation = "photoFade 0.6s ease";
});

const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 8000);
}
