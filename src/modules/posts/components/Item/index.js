import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Icon } from 'react-portland-ui';
import startOutlineIcon from 'icons/star-outline.svg';
import cameraIcon from 'icons/camera.svg';

export const PostsItem = ({ pictures, starred, title }) => (
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
    <section className="title">
      {title}
    </section>
  </li>
);

PostsItem.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
  starred: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default PostsItem;
