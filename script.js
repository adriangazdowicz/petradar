const images = ["images/obroza1.jpg", "images/obroza2.jpg", "images/obroza3.jpg"];
let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentIndex];
}
