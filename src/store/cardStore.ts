import { makeAutoObservable } from "mobx";

class CardStore {
  choosedProducts = [];

  constructor() {
    makeAutoObservable(this);
  }
}

const cardStore = new CardStore();
export default cardStore;
