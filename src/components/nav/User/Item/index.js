import React, { PropTypes } from 'react';
import { Icon } from 'react-portland-ui';

const NavItem = ({ icon, image, imageAlt, onClick }) => {
  const content = icon
    ? <Icon className="icon" svg={icon} />
    : <img alt={imageAlt} className="image" src={image} />
  ;

  return (
    <section className="item" onClick={onClick}>
      {content}
    </section>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavItem;
