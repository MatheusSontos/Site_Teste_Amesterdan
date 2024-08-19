document.addEventListener('DOMContentLoaded', function() {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function displayProductDetails(name, price, image, description) {
        const productInfo = document.getElementById('product-info');

        productInfo.innerHTML = `
            <div class="product-card">
                <img src="${image}" alt="${name}" class="product-image">
                <h2>${name}</h2>
                <p class="price">${price}</p>
                <p class="product-description">${description}</p>
            </div>
        `;
    }

    const name = getQueryParam('name');
    const price = getQueryParam('price');
    const image = getQueryParam('image');
    const description = getQueryParam('description');

    if (name && price && image && description) {
        displayProductDetails(name, price, image, description);
    }
});

