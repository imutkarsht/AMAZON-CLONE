document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('wheel', function(evt) {
        const productsContainer = evt.target.closest('.products');
        
        if (productsContainer) {
            evt.preventDefault();
            productsContainer.scrollLeft += evt.deltaY;
        }
    });
});