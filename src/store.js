import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

// import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';

// import rootReducer from './reducers';
import sagas from './sagas';

// export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState = {}, history) {
  const enhancers = [];
  const middleware = [routerMiddleware(history), sagaMiddleware];

  /*
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
} */

  const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware), ...enhancers);

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    composedEnhancers,
  );

  sagaMiddleware.run(sagas);

  // export default store;
  return store;
}
