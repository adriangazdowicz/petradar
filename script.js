const images = ["images/obroza1.jpg", "obroza2.jpg", "obroza3.jpg"];
let currentIndex = 0;

function changeSlide(direction) {
    // Zmień indeks bieżącego obrazu
    currentIndex += direction;

    // Zapewnij, że indeks nie wyjdzie poza zakres
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Zaktualizuj obraz w sliderze
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentIndex];
}
