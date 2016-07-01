import React, { Component, PropTypes } from 'react';
import { Provider } from 'modules/apollo';
import Content from '../Content';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    client: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store} client={this.props.client}>
        <Content routes={this.props.routes} history={this.props.history} />
      </Provider>
    );
  }
}
