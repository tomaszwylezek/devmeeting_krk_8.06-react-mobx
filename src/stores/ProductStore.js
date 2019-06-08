import { observable } from "mobx";

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
}

export const store = new ProductStore();
