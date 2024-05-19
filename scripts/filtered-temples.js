const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const oldButton = document.querySelector('#old-button');
const homeButton = document.querySelector('#home-button')
const newButton = document.querySelector('#new-button')
const largeButton = document.querySelector('#large-button')
const smallButton = document.querySelector('#small-button');
let mainElement = document.querySelector('main');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [{
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Oquirrh Mountain Utah",
        location: "South Jordan, Utah",
        dedicated: "2009, August, 2",
        area: 60000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oquirrh-mountain-utah/400x250/oquirrh-mountain-utah-temple-1110597-wallpaper.jpg"
    },
    {
        templeName: "Redlands California",
        location: "Redlands, California",
        dedicated: "2003, September, 14",
        area: 17300,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/redlands-california/400x250/redlands-temple-lds-766820-wallpaper.jpg"
    },
    {
        templeName: "Newport Beach California",
        location: "Newport Beach, California",
        dedicated: "2003, August, 15",
        area: 17800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/400x250/newport-beach-california-temple-1169298-wallpaper.jpg"
    }
    // Add more temple objects here...
];


createTempleElement(temples);

homeButton.addEventListener("click", () => {
    mainElement.textContent = "";

    createTempleElement(temples);
});


oldButton.addEventListener("click", () => {

    mainElement.textContent = "";


    let oldTemples = temples.filter(temple => {

        const templeYear = parseInt(temple.dedicated.split(',')[0], 10);
        return templeYear < 1900;
    });
    createTempleElement(oldTemples);
    mainElement.style.gridTemplateRows = '1fr';
    mainElement.style.gridTemplateColumns = '1fr';
});

newButton.addEventListener("click", () => {

    mainElement.textContent = "";


    let newTemples = temples.filter(temple => {

        const templeYear = parseInt(temple.dedicated.split(',')[0], 10);
        return templeYear > 2000;
    });
    createTempleElement(newTemples);
    mainElement.style.gridTemplateRows = '1fr';
});

largeButton.addEventListener("click", () => {

    mainElement.textContent = "";

    let newTemples = temples.filter(temple => {

        const templeSize = temple.area;
        return templeSize > 90000;
    });
    createTempleElement(newTemples);
    mainElement.style.gridTemplateRows = '1fr';
});

smallButton.addEventListener("click", () => {

    mainElement.textContent = "";

    let newTemples = temples.filter(temple => {

        const templeSize = temple.area;
        return templeSize < 10000;
    });
    createTempleElement(newTemples);
    mainElement.style.gridTemplateRows = '1fr';
});

function createTempleElement(filteredList) {
    filteredList.forEach(temple => {
        let mainElement = document.querySelector('main');

        let newTemple = document.createElement('figure');
        let newName = document.createElement('figcaption');
        let newLocation = document.createElement('figcaption');
        let newDedication = document.createElement('figcaption');
        let newArea = document.createElement('figcaption');
        let newImg = document.createElement('img');

        newTemple.className = 'templefig';

        newName.textContent = temple.templeName;
        newLocation.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
        newDedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
        newArea.innerHTML = `<span class = "label">Size:</span> ${temple.area} sq ft`;

        newName.className = 'temple-name';
        newLocation.className = 'templecaption';
        newDedication.className = 'templecaption';
        newArea.className = 'templecaption';
        newImg.src = temple.imageUrl;
        newImg.className = 'templeimg';
        newImg.alt = `image of ${temple.templeName} Temple`;
        // newImg.width = "400px"
        newImg.loading = 'lazy';

        newTemple.appendChild(newName);
        newTemple.appendChild(newLocation);
        newTemple.appendChild(newDedication);
        newTemple.appendChild(newArea);
        newTemple.appendChild(newImg);


        mainElement.appendChild(newTemple);


    });
    mainElement.style.gridTemplateRows = '';
    mainElement.style.gridTemplateColumns = '';
};





// let x = 0;

// if () {

// }



//     switch ()