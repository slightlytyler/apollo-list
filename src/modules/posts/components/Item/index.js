import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Box } from 'react-portland-ui';

export const PostsItem = ({ id, title, text, postedAt, authorName, currentUserIsAuthor }) => (
  <div className="posts__item">
    <Box justifyContent="space-between" alignItems="center">
      <h2>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h2>
      {currentUserIsAuthor && <Link to={`/posts/${id}/edit`}>Edit</Link>}
    </Box>
    <Box justifyContent="space-between" alignItems="center">
      <h4>{authorName}</h4>
      <span>Posted {postedAt}</span>
    </Box>
    <p>{text}</p>
  </div>
);

PostsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  currentUserIsAuthor: PropTypes.bool.isRequired,
};

export default PostsItem;
