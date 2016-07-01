import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import filter from 'redux-storage-decorator-filter';
import { LOCAL_STORAGE_KEY } from 'config';
import { LOAD_COMPLETE } from './actionTypes';
import { CLEAR_STORE } from 'store/actionTypes';
import { actionTypes as routerActionTypes } from 'modules/router';

// const persistentModuleKeys = [
//   userKey,
//   ['groups', 'condition', 'selectedItems'],
//   ['providers', 'condition', 'selectedItems'],
// ];
// const persistentActionTypes = [
//   userActionTypes.authorize.success,
//   userActionTypes.unauthorize.success,
//   'groups/SELECT_ITEMS',
//   'providers/SELECT_ITEMS',
// ];

export const wrapReducer = storage.reducer;

export const init = (persistentModuleKeys, persistentActionTypes) => {
  const engine = filter(
    createEngine(LOCAL_STORAGE_KEY),
    persistentModuleKeys,
  );

  return {
    middleware: storage.createMiddleware(
      engine,
      [routerActionTypes.LOCATION_CHANGE],
      [
        CLEAR_STORE,
        ...persistentActionTypes,
      ],
    ),
    load: async (store, cb) => {
      await storage.createLoader(engine)(store);
      cb();
      store.dispatch({ type: LOAD_COMPLETE });
    },
  };
};
