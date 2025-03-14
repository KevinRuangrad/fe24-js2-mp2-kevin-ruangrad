import Product from "./Product.ts";

/**
 * Fetches all products from dummyjson.com
 * @returns Array of Product
 */

interface ProductData {
    title: string;
    thumbnail: string;
    stock: number;
    price: number;
    discountPercentage: number;
    category: string;
    rating: number;
}

export const getAllProducts = async () => {
    const url = 'https://dummyjson.com/products';

    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error();
        
        const data = await res.json();

        const products: Product[] = data.products.map((product: ProductData) => new Product(product));

        return products;
    }
    catch(error){
        throw new Error('Error fetching products')
    }

}