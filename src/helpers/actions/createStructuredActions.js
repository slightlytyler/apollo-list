import { bindActionCreators } from 'redux';
import { curry } from 'lodash';

export default curry(
  (actions, dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  })
);
