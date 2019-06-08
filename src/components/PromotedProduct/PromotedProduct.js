import React from "react";
import PropTypes from "prop-types";
import { Tags } from "../Tags/Tags";

import styles from "./PromotedProduct.module.scss";

export const PromotedProduct = ({ id, name, onBuyClick, tags }) => {
  const handleClick = () => {
    onBuyClick(id);
  };
  return (
    <div className={styles.promoted}>
      {name}
      <button className="btn btn-primary" onClick={handleClick}>
        Buy
      </button>
      {tags.length && <Tags tags={tags} />}
    </div>
  );
};

PromotedProduct.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};
