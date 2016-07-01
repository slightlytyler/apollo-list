import React, { Component, PropTypes } from 'react';
import { VerticalBox } from 'react-portland-ui';
import Header from '../Header';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (
      <VerticalBox className="layout--basic">
        <Header />
        {this.props.children}
      </VerticalBox>
    );
  }
}
