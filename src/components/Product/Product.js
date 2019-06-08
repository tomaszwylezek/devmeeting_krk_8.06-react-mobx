import React from "react";
import PropTypes from "prop-types";

export const Product = ({ name }) => <span>{name}</span>;

Product.propTypes = {
  name: PropTypes.string
};
