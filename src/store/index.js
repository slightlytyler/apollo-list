import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { map, flatten } from 'lodash';
import { getModuleConfigs, getModuleAtoms } from 'helpers/modules';
import clearStoreWrapper from './clearStoreWrapper';
import rootReducer from 'reducers';
import * as modules from 'modules';

const { initializer: router } = modules.router;
const { initializer: storage } = modules.storage;
const persistentKeys = map(
  getModuleConfigs(modules, 'persist', true),
  (value, key) => [key, ...flatten(value)]
);
const persistentActionTypes = getModuleConfigs(modules, 'persistTriggers');
const { middleware: storageMiddleware, load: loadStorage } = storage.init(
  persistentKeys,
  persistentActionTypes
);

const reducer = compose(clearStoreWrapper, storage.wrapReducer)(rootReducer);

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield getModuleAtoms(modules, 'sagas').map(saga => saga());
}

export default function configureStore(initialState = {}) {
  const middleware = applyMiddleware(
    thunkMiddleware,
    sagaMiddleware,
    router.middleware,
    storageMiddleware,
    ...getModuleAtoms(modules, 'middleware')
  );

  const store = compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore)(reducer, initialState);

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  loadStorage(store, () => {
    const { dispatch, getState } = store;

    getModuleAtoms(modules, 'hooks').forEach(hook => hook(dispatch, getState));
  });

  return store;
}
