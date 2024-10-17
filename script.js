const images = ['1.jpg', '2.jpg', '3.jpg'];
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('carousel-img').src = images[currentIndex];
});

document.getElementById('previous').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('carousel-img').src = images[currentIndex];
});
