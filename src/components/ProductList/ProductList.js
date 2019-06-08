import React, { Component } from "react";
import { Product } from "../Product/Product";

export class ProductList extends Component {
  state = {
    products: [{ id: 0, name: "Apple" }, { id: 1, name: "Coffee" }]
  };

  render() {
    return (
      <ul>
        {this.state.products.map(({ id, name }) => (
          <li key={id}>
            <Product name={name} />
          </li>
        ))}
      </ul>
    );
  }
}
