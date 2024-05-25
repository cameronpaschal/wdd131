const reviewsSubmitted = document.querySelector('#reviewCount');

let numReviews = localStorage.getItem('numVisits') || 0;

numReviews++;

localStorage.setItem('numVisits', numReviews);

if (numReviews !== 0) {
    addText(numReviews);
} else {
    addText(0);
}

function addText(number) {
    reviewsSubmitted.textContent = number;

}