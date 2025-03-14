/**
 * Represents a product.
 *
 * This class encapsulates all information.
 * It provides methods to get the product details and update its stock.
 * The class calculates the discounted price based on the discount percentage.
 *
 * @class Product
 * @property {string} title
 * @property {string} thumbnail - URL of the product's thumbnail image.
 * @property {number} stock
 * @property {number} price - The original price of the product.
 * @property {number} discountPercentage
 * @property {string} category
 * @property {number} rating - (out of 5).
 * @property {number} discountedPrice - The price after applying the discount, rounded to two decimals.
 */

export default class Product {
  readonly title: string;
  readonly thumbnail: string;
  private _stock: number;
  readonly price: number;
  readonly discountPercentage: number;
  readonly category: string;
  readonly rating: number;
  readonly discountedPrice: number;

  constructor({
    title,
    thumbnail,
    stock,
    price,
    discountPercentage,
    category,
    rating,
  }: {
    title: string;
    thumbnail: string;
    stock: number;
    price: number;
    discountPercentage: number;
    category: string;
    rating: number;
  }) {
    this.title = title;
    this.thumbnail = thumbnail;
    this._stock = stock;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
    this.rating = rating;
    this.discountedPrice = this.calculateDiscountedPrice();
  }

  private calculateDiscountedPrice(): number {
    let discountedPrice =
      this.price - this.price * (this.discountPercentage * 0.01);
    return Math.round(discountedPrice * 100) / 100; // Round to two decimals and preserve the datatype
  }

  get stock(): number {
    return this._stock;
  }

  updateStock(): void {
    if (this._stock > 0) {
      this._stock--;
    }
  }
}
