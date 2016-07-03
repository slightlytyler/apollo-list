import React, { PropTypes } from 'react';

export const PostsItem = ({ title, text }) => (
  <div className="posts__item">
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

PostsItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PostsItem;
