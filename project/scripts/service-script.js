const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', (event) => {

    let submitCount = localStorage.getItem('numSubmissions') || 0;
    const form = document.querySelector('#form');
    const submitCountP = document.querySelector('#submissions');
    submitCountP.textContent = `Submissions: ${submitCount}`;
    form.addEventListener('submit', function(event) {
        submitCount++;
        localStorage.setItem('numSubmissions', submitCount)
        submitCountP.textContent = `Submissions: ${submitCount}`;
    });
});


let dropdown = document.querySelector('#service');



const services = [{
        title: "Residential",
        description: "We clean houses, large and small. We can do a one-time deep clean or a monthly cleaning service depending on you and your preferences. Dog and cat hair are our specialty and we pride ourselves on keeping your house clean even with your animal friends.",
        contactMessage: "Clean my Home",
        value: 0
    },
    {
        title: "Commercial",
        description: "We clean large scale commercial offices. No office or property is too big or too small, we will keep it sparkling. We have flexible hours, so we can clean after your regular business hours.",
        contactMessage: "Clean my Business",
        value: 1
    },
    {
        title: "Schools",
        description: "We offer cleaning services for schools because we know how messy kids can be. As stated before, we have flexible hours so we can clean after school hours to keep our kids' learning environment clean.",
        contactMessage: "Clean our School",
        value: 2
    },
    {
        title: "Construction",
        description: "Construction sites are also on the table for us. We do constrcution clean up and make those new built homes and offices look as new as they are. You can trust us to make your work look beautiful.",
        contactMessage: "Clean our Job Site",
        value: 3
    },

];

function addService(serviceList) {

    serviceList.forEach(service => {

        let newService = document.createElement('option');
        newService.textContent = service.title;
        newService.setAttribute('value', service.value);

        dropdown.appendChild(newService);

    });

}

document.querySelector('#service').addEventListener('change', function() {
    const selectedService = this.value;

    const serviceDiv = document.querySelector('#service-type-list');

    const serviceTitle = document.querySelector('#service-title-2');
    const serviceDescription = document.querySelector('#description');
    const contactLink = document.querySelector('#contact-link');

    if (selectedService !== "") {
        const service = services[selectedService];

        serviceTitle.textContent = service.title;
        serviceDescription.textContent = service.description;
        contactLink.textContent = service.contactMessage;
        serviceDiv.style.display = 'block';


    } else {
        serviceDiv.style.display = 'none';
    }


})

addService(services);