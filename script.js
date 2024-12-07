const images = ["images/obroza1.jpg", "images/obroza2.jpg", "images/obroza3.jpg"];
let currentIndex = 0;
let autoSlideInterval;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentIndex];

    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => changeSlide(1), 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
});

function revealSections() {
    const sections = document.querySelectorAll('main > section');
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
document.addEventListener('DOMContentLoaded', revealSections);

