import React, { Component } from "react";
import classNames from "classnames";
import { orderBy } from "lodash";
import { Product } from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { store } from "../../stores/ProductStore";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";

@inject("store")
@observer
class ProductList extends Component {
  getSortIcon = sortText =>
    store.sortedBy === sortText && (
      <FontAwesomeIcon
        icon={this.props.store.ascSort ? faArrowUp : faArrowDown}
        className="ml-2"
      />
    );

  setSortClass = sortText =>
    classNames("btn mr-2", {
      "btn-outline-primary": this.props.store.sortedBy !== sortText,
      "btn-primary": this.props.store.sortedBy === sortText
    });

  renderSortButtons = sortTypes =>
    sortTypes.map(type => (
      <button
        key={type}
        className={this.setSortClass(type)}
        onClick={() => this.props.store.sortBy(type)}
      >
        {type[0].toUpperCase() + type.slice(1)}
        {this.getSortIcon(type)}
      </button>
    ));

  render() {
    const {
      ascSort,
      sortedBy,
      filter,
      products,
      changeFilter,
      buyProduct,
      soldProductsNumber
    } = this.props.store;

    const sortedProducts = orderBy(products, sortedBy, [
      ascSort ? "asc" : "desc"
    ]).filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

    console.log(toJS(store));
    return (
      <div className="container mb-5">
        <div className="card card-header mb-3">
          <div>
            <h2>Sort by</h2>
            <div className="d-flex">
              {this.renderSortButtons([
                "name",
                "price",
                "id",
                "promoted",
                "isSold"
              ])}
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
              placeholder="Filter"
              value={filter}
              onChange={e => changeFilter(e.target.value)}
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
                onBuyClick={buyProduct}
              />
            </li>
          ))}
        </ul>
        Sold {soldProductsNumber}
      </div>
    );
  }
}

export { ProductList };
