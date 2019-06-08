import { observable, action, computed } from "mobx";

class ProductStore {
  @observable
  products = [
    { id: 0, name: "Apple", tags: ["food", "fruit"], price: 5 },
    { id: 1, name: "Coffee", tags: ["food", "instant"], price: 3 },
    {
      id: 2,
      name: "Apple mouse",
      promoted: true,
      tags: ["apple", "tech"],
      price: 3
    },
    {
      id: 3,
      name: "Apple coffee",
      promoted: true,
      tags: ["apple", "tech"],
      price: 8
    }
  ];
  @observable
  sortedBy = "name";

  @observable
  filter = "";
  @observable
  ascSort = true;

  @action
  buyProduct = id => {
    const product = this.products.find(p => p.id === id);
    product.isSold = true;
  };

  @action
  sortBy = sortedBy => {
    this.ascSort = this.sortedBy ? !this.ascSort : this.ascSort;
    this.sortedBy = sortedBy;
  };

  @action
  changeFilter = value => {
    this.filter = value;
  };

  @computed get soldProductsNumber() {
    return this.products.filter(({ isSold }) => isSold).length ;
  }
}

export const store = new ProductStore();
