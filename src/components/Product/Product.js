import React from "react";
import PropTypes from "prop-types";
import { Tags } from "../Tags/Tags";

import styles from "./Product.module.scss";

export const Product = ({
  id,
  name,
  onBuyClick,
  tags,
  promoted,
  price,
  isSold
}) => {
  const handleClick = () => {
    onBuyClick(id);
  };

  return (
    <div className={promoted && styles.promoted}>
      <div className="d-flex justify-content-between">
        {name} - Actual price is: {price}
        <button
          className="btn btn-success"
          disabled={isSold}
          onClick={handleClick}
        >
          Buy
        </button>
      </div>
      {tags.length && <Tags tags={tags} />}
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};
