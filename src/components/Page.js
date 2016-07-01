import React, { Component, PropTypes } from 'react';
import Header from './Header';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <div className="container--page">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
