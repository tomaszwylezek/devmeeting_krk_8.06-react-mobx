import React from "react";
import PropTypes from "prop-types";
import className from 'classnames'

import styles from './Tags.module.scss';

export const Tags = ({ tags }) => (
  <ul className={className(styles.tagList, 'pl-1')}>
    {tags.map(tag => (
      <li key={tag} className="badge badge-pill badge-secondary mr-1">{tag}</li>
    ))}
  </ul>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};
