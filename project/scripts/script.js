let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = slides.getElementsByTagName('picture');
const totalSlides = images.length;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

document.querySelector('.back').addEventListener('click', () => {
    showSlide(slideIndex += 1);
});

document.querySelector('.forward').addEventListener('click', () => {
    showSlide(slideIndex -= 1);
});

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}



hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});