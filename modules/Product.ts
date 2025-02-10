/**
 * Represents a product.
 * 
 * This class encapsulates all information.
 * It provides methods to get the product details and update its stock.
 * The class calculates the discounted price based on the discount percentage.
 * 
 * @class Product
 * @property {string} #title 
 * @property {string} #thumbnail - URL of the product's thumbnail image.
 * @property {number} #stock 
 * @property {number} #price - The original price of the product.
 * @property {number} #discountPercentage 
 * @property {string} #category 
 * @property {number} #rating - (out of 5).
 * @property {number} #discountedPrice - The price after applying the discount, rounded to two decimals.
 */
 
export default class Product{
    private title: string;
    private thumbnail: string;
    private stock: number;
    private price: number;
    private discountPercentage: number;
    private discountedPrice: number;
    private category: string;
    private rating: number;

    constructor({title, thumbnail, stock, price, discountPercentage, category, rating}){
        this.title = title;
        this.thumbnail = thumbnail;
        this.stock = stock;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
        this.rating = rating;
        this.discountedPrice = this.#calculateDiscountedPrice();
    }

    #calculateDiscountedPrice(){
        let discountedPrice = this.price - (this.price * (this.discountPercentage * 0.01));
        
        discountedPrice = Math.round(discountedPrice*100)/100; // Round to two decimals and preserv the datatype

        return discountedPrice;
    }

    // Getters
    getTitle(): string { return this.title; }
    getThumbnailURL(): string { return this.thumbnail; }
    getStock(): number { return this.stock; }
    getCategory(): string { return this.category; }
    getRating(): number { return this.rating; }
    getDiscountedPrice(): number { return this.discountedPrice; }
    

    // Setters
    updateStock(){
        if(this.stock <= 0 )this.stock = 0
        else this.stock--;
    }
}
