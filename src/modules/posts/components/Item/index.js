import React, { PropTypes } from 'react';

export const PostsItem = ({ id, title, body }) => (
  <div key={id}>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

PostsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostsItem;
