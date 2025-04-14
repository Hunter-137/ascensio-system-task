import { makeAutoObservable } from "mobx";

class CardStore {
  choosedProducts = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new CardStore();
