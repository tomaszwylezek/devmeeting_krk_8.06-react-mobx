import React, { Component } from "react";
import classNames from "classnames";
import { orderBy } from "lodash";
import { Product } from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export class ProductList extends Component {
  state = {
    products: [
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
    ],
    sortedBy: "name",
    filter: "",
    ascSort: true
  };

  handleBuy = id => {
    this.setState(previousState => {
      const products = previousState.products.map(
        p => (p.id === id ? { ...p, isSold: true } : p)
      );

      return { products };
    });

    console.log(id);
  };

  sortBy = sortedBy => {
    this.setState(prevState => ({
      sortedBy: sortedBy,
      ascSort:
        prevState.sortedBy === sortedBy ? !prevState.ascSort : prevState.ascSort
    }));
  };

  render() {
    const { products, ascSort, sortedBy, filter } = this.state;
    const sortedProducts = orderBy(products, sortedBy, [
      ascSort ? "asc" : "desc"
    ]).filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div className="container mb-5">
        <div className="card card-header">
          <div>
            <h2>Sort by</h2>
            <div className="d-flex">
              <button
                className={classNames("btn mr-2", {
                  ["btn-outline-primary"]: sortedBy !== "name",
                  ["btn-primary"]: sortedBy === "name"
                })}
                onClick={() => this.sortBy("name")}
              >
                Name
                {sortedBy === "name" && (
                  <FontAwesomeIcon
                    icon={ascSort ? faArrowUp : faArrowDown}
                    className="ml-2"
                  />
                )}
              </button>
              <button
                className={classNames("btn mr-2", {
                  ["btn-outline-primary"]: sortedBy !== "price",
                  ["btn-primary"]: sortedBy === "price"
                })}
                onClick={() => this.sortBy("price")}
              >
                Price
                {sortedBy === "price" && (
                  <FontAwesomeIcon
                    icon={ascSort ? faArrowUp : faArrowDown}
                    className="ml-2"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Filter name:
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={filter}
              onChange={e =>
                this.setState({
                  filter: e.target.value
                })
              }
            />
          </div>
        </div>
        <ul className="pl-0">
          {sortedProducts.map(({ id, name, promoted, tags, price, isSold }) => (
            <li key={id} className="card mb-3 p-3">
              <Product
                id={id}
                price={price}
                isSold={isSold}
                name={name}
                tags={tags}
                promoted={promoted}
                onBuyClick={this.handleBuy}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
