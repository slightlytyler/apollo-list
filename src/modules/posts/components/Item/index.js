import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Icon } from 'react-portland-ui';
import { Link } from 'modules/router/components';
import startOutlineIcon from 'icons/star-outline.svg';
import cameraIcon from 'icons/camera.svg';

export const PostsItem = ({ id, pictures, starred, title }) => (
  <li className="posts__item">
    <section className="actions">
      <Icon
        className={classnames('item star', { active: starred })}
        svg={startOutlineIcon}
      />
      <Icon
        className={classnames('item pictures', { disabled: !pictures.length })}
        svg={cameraIcon}
      />
    </section>
    <Link to={`/posts/${id}`} className="title">
      {title}
    </Link>
  </li>
);

PostsItem.propTypes = {
  actions: PropTypes.shape({
    view: PropTypes.func.isRequired,
  }),
  id: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string),
  starred: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default PostsItem;
