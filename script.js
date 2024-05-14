document.addEventListener('DOMContentLoaded', () => {
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
});
