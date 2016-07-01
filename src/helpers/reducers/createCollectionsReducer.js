import { findIndex, isEqual, without } from 'lodash';
import { assoc } from 'react-update-in';
import { shape as apiActionsShape } from 'api/methods';

const getCollectionIndex = (state, query) => (
  findIndex(state, c => isEqual(c.query, query))
);

// Create reducer for handling collections of remote records
export default moduleActionTypes => (state = [], { type, payload, meta = {} }) => {
  const actionTypes = { ...apiActionsShape, ...moduleActionTypes };

  switch (type) {
    case actionTypes.createRecord.pending:
    case actionTypes.createRecord.success: {
      const { query } = meta;

      if (query) {
        const index = getCollectionIndex(state, meta.query);

        if (index !== -1) {
          const collection = state[index];

          return assoc(state, index, {
            ...collection,
            ids: [...collection.ids, payload.id],
          });
        }

        return state;
      }

      return state;
    }

    case actionTypes.deleteRecord.pending: {
      return state.map(collection =>
        assoc(collection, 'ids', without(collection.ids, payload.id))
      );
    }

    case actionTypes.fetchCollection.pending: {
      const index = getCollectionIndex(state, payload.query);

      if (index !== -1) {
        return assoc(state, index, {
          ...state[index],
          loading: true,
        });
      }

      return [...state, {
        query: payload.query,
        loading: true,
        ids: [],
      }];
    }

    case actionTypes.fetchCollection.success: {
      const index = getCollectionIndex(state, payload.query);
      const pagination = payload.pagination
        ? {
          totalElements: payload.pagination.totalElements,
          totalPages: payload.pagination.totalPages,
        }
        : {};

      return assoc(state, index, {
        ...state[index],
        loading: false,
        ids: payload.records.map(record => record.id),
        ...pagination,
      });
    }

    default:
      return state;
  }
};
