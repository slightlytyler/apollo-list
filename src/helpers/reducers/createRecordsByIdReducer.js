import { updateIn, assoc, dissoc, merge } from 'react-update-in';
import { createRecordsById } from 'helpers/data';
import { shape as apiActionsShape } from 'api/methods';

// Create reducer for handling records dictionary
export default (moduleActionTypes, initialState = {}) =>
  (state = initialState, { type, payload }) => {
    const actionTypes = { ...apiActionsShape, ...moduleActionTypes };

    switch (type) {
      case actionTypes.createRecord.pending:
      case actionTypes.replaceRecord.pending: {
        if (payload) return assoc(state, payload.id, payload);
        return state;
      }

      case actionTypes.createRecord.success:
      case actionTypes.updateRecord.success:
      case actionTypes.replaceRecord.success:
      case actionTypes.fetchRecord.success:
        return assoc(state, payload.id, payload);

      case actionTypes.updateRecord.pending: {
        if (payload) return updateIn(state, [payload.id], merge, payload);
        return state;
      }

      case actionTypes.deleteRecord.pending: {
        if (payload) return dissoc(state, payload.id);
        return state;
      }

      case actionTypes.fetchCollection.success:
        return { ...state, ...createRecordsById(payload.records) };

      default:
        return state;
    }
  };
