import React, { Component } from "react";
import { sortBy } from 'lodash'
import { Product } from "../Product/Product";
import { PromotedProduct } from "../PromotedProduct/PromotedProduct";

export class ProductList extends Component {
  state = {
    products: [
      { id: 0, name: "Apple", tags: ["food", "fruit"] },
      { id: 1, name: "Coffee", tags: ["food", "instant"] },
      { id: 2, name: "Apple mouse", promoted: true, tags: ["apple", "tech"] },
      { id: 3, name: "Apple coffee", promoted: true, tags: ["apple", "tech"] }
    ]
  };

  handleBuy = id => {
    this.setState(previousState => {
      const products = previousState.products.map(
        p => (p.id === id ? { ...p, isSold: true } : p)
      );

      return { products };
    });

    console.log(id)
  };

  render() {
    return (
      <div className="container mb-5">
        <ul>
          {this.state.products.map(({ id, name, promoted, tags }) => (
            <li key={id} className="card mb-3 p-3">
              {promoted ? (
                <PromotedProduct
                  id={id}
                  name={name}
                  tags={tags}
                  onBuyClick={this.handleBuy}
                />
              ) : (
                <Product
                  id={id}
                  name={name}
                  tags={tags}
                  onBuyClick={this.handleBuy}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
