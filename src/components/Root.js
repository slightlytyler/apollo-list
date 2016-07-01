import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Content from './Content';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Content routes={this.props.routes} history={this.props.history} />
      </Provider>
    );
  }
}
