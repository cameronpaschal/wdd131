let dropdown = document.querySelector('#product');

const products = [{
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function addProduct(productList) {

    productList.forEach(product => {

        let newProduct = document.createElement('option');
        newProduct.textContent = product.name;
        newProduct.setAttribute('value', product.id);

        dropdown.appendChild(newProduct);

    });

}

addProduct(products);