import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Box } from 'react-portland-ui';

export const PostsItem = ({ id, title, text, postedAt, authorName }) => (
  <div className="posts__item">
    <Box justifyContent="space-between" alignItems="center">
      <h2>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h2>
      <Link to={`/posts/${id}/edit`}>Edit</Link>
    </Box>
    <h4>{authorName}</h4>
    <span>Posted at: {postedAt}</span>
    <p>{text}</p>
  </div>
);

PostsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default PostsItem;
