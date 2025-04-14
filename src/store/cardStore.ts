import { makeAutoObservable, computed } from "mobx";
import { TApiData } from "@/types/types";

class CardStore {
  choosedProducts: TApiData[] = [];

  constructor() {
    makeAutoObservable(this, {
      totalPrice: computed,
    });
  }

  addProduct(product: TApiData) {
    const existingProduct = this.choosedProducts.find(
      (item) => item.id === product.id
    );
    if (!existingProduct) {
      this.choosedProducts.push({ ...product });
    } else {
      console.log("Product already in cart:", product.title);
    }
  }

  removeProduct(productId: number) {
    const productIndex = this.choosedProducts.findIndex(
      (item) => item.id === productId
    );
    if (productIndex > -1) {
      this.choosedProducts.splice(productIndex, 1);
    }
  }

  get totalPrice(): number {
    return this.choosedProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }

  get totalItems(): number {
    return this.choosedProducts.length;
  }
}

const cardStore = new CardStore();
export default cardStore;
