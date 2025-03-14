/**
 * Sorts an array of products by price or rating
 * 
 * @param {Product[]} products 
 * @param {'ascending' | 'descending'} order 
 * @returns Array of Product
 */

const sortByRating = (products, order) => {
    const sortedProducts = products.toSorted( (a, b) => {
        if(order === 'descending') return b.getRating()-a.getRating();
        else if(order === 'ascending') return a.getRating()-b.getRating();
        else return 0;
    } );

    return sortedProducts;
}

const sortByPrice = (products, order) => {
    const sortedProducts = products.toSorted( (a, b) => {
        if(order === 'descending') return b.getDiscountedPrice()-a.getDiscountedPrice();
        else if(order === 'ascending') return a.getDiscountedPrice()-b.getDiscountedPrice();
        else return 0;
    } );

    return sortedProducts;
}


/**
 * @param {Product[]} products 
 * @param {'rate-des'|'rate-asc'|'price-des'|'price-asc'} sortBy 
 * @returns Array of Product
 */

export const getSortedProducts = (products, sortBy)=>{
    let sortedProducts;

    if(sortBy === 'rate-des') sortedProducts = sortByRating(products, 'descending');
    else if(sortBy === 'rate-asc') sortedProducts = sortByRating(products, 'ascending');
    else if(sortBy === 'price-des') sortedProducts = sortByPrice(products, 'descending');
    else if(sortBy === 'price-asc') sortedProducts = sortByPrice(products, 'ascending');
    else sortedProducts = products;

    return sortedProducts;
}