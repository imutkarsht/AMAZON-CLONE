document.addEventListener("DOMContentLoaded", function() {
    const sectionsData = [
        {
            title: "Best for home and kitchen",
            products: ["./app/assets/product4-1.jpg", "./app/assets/product4-2.jpg", "./app/assets/product4-3.jpg", "./app/assets/product4-4.jpg", "./app/assets/product4-5.jpg", "./app/assets/product4-6.jpg", "./app/assets/product4-7.jpg", "./app/assets/product4-8.jpg", "./app/assets/product4-9.jpg", "./app/assets/product4-10.jpg"] 
        },
    ];

    function generateProductHTML(products) {
        return products.map(product => `<img src="${product}" alt="">`).join('');
    }

    function generateSectionHTML(section) {
        return `
        <div class="pro-slider">
            <h2>${section.title}</h2>
            <div class="products fx">
                ${generateProductHTML(section.products)}
            </div>
        </div>`;
    }

    const dynamicSectionsContainer = document.getElementById('dynamicSections');

    sectionsData.forEach(section => {
        const sectionHTML = generateSectionHTML(section);
        dynamicSectionsContainer.insertAdjacentHTML('beforeend', sectionHTML);
    });
});
