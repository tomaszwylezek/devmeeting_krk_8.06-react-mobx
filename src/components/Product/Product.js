import React from "react";
import PropTypes from "prop-types";
import { Tags } from "../Tags/Tags";

export const Product = ({ id, name, onBuyClick, tags }) => {
  const handleClick = () => {
    onBuyClick(id);
  };

  return (
    <div>
      {name}
      <button className="btn btn-primary" onClick={handleClick}>
        Buy
      </button>
      {tags.length && <Tags tags={tags} />}
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};
