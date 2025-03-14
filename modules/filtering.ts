/**
 * Filters an array of products by category or max price
 */

/**
 * @param {Array of Product} products 
 * @param {string} category 
 * @returns Array of Product
 */

export const filterCategory = (products, category) => products.filter( product => product.getCategory() == category)

/**
 * @param {Array of Product} products 
 * @param {number} maxPrice 
 * @returns Array of Product
 */

export const filterMaxPrice = (products, maxPrice) => products.filter( product => product.getDiscountedPrice()<=maxPrice)
