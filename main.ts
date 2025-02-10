/**
 * Fetches and renders all products on load from dummyjson.com 
 * Handles events for filtering through a form and sorting through a select 
 * 
*/
import Product from "./modules/Product.ts";
import { getAllProducts } from "./modules/dummyjsonapi.ts";
import { renderProducts } from "./modules/gui.ts";
import { filterCategory, filterMaxPrice } from "./modules/filtering.ts";
import { getSortedProducts } from "./modules/sorting.ts";

/** DOM Elements */
const sortSelect = document.querySelector('#sortSelect') as HTMLSelectElement | null;
const filterForm = document.querySelector('#filterForm') as HTMLFormElement | null;

/*** Load and Render products ***/
let products: Product[] = [];
let filteredProducts: Product[] = [];

const loadProducts = async () => {
    try {
        products = await getAllProducts();
        renderProducts(products);
    }
    catch (error) {
        console.error(error);
    }
}
loadProducts();

/*** Filter using filter form data ***/
filterForm?.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const category = (filterForm.querySelector('select') as HTMLSelectElement).value;
    const maxPrice = (filterForm.querySelector('input') as HTMLInputElement).value;
    
    if (category) filteredProducts = filterCategory(products, category);
    else filteredProducts = products;

    if (maxPrice) filteredProducts = filterMaxPrice(filteredProducts, parseFloat(maxPrice));

    const sortedProducts = getSortedProducts(filteredProducts, sortSelect?.value || '');

    renderProducts(sortedProducts);
});

/*** Sort using sort select ***/
sortSelect?.addEventListener('change', () => {
    const sortedProducts = getSortedProducts(filteredProducts, sortSelect.value);
    renderProducts(sortedProducts);
});

