import Product from "./Product";

/**
 * Creates a product card for each Product in an array and appends it to a div container
 * 
 * @param {Product[]} products - Array of Product
 */

export const renderProducts = (products: Product[]): void => {
    const productContainer = document.querySelector("#productCardContainer") as HTMLDivElement | null;

    if (!productContainer) {
        console.error("Product container not found");
        return;
    }

    productContainer.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        const addToCartBtn = document.createElement('button');
        const id = product.getTitle().toLowerCase().replaceAll(' ', '-');

        card.classList.add('product-card');
        card.id = id;

        card.innerHTML = `
            <img src=${product.getThumbnailURL()} alt=${product.getTitle()}>
            <div>
                <h2>${product.getTitle()}</h2>
                <h2>⭐${product.getRating()}</h2>
            </div>
            <div>
                <p>$${product.getDiscountedPrice()}</p>
                <h2 class='stock'>📦${product.getStock()}</h2>
            </div>
        `;
        productContainer.append(card);

        addToCartBtn.innerText = 'Add to cart';
        card.append(addToCartBtn);

        addToCartBtn.addEventListener('click', () => {
            product.updateStock();
            const stockElement = document.querySelector(`#${id} .stock`) as HTMLElement;
            if (stockElement) {
                stockElement.innerText = `📦` + product.getStock();
            }
        });
    });
}
