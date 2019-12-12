import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import App from './App';
import configureStore from '../store';

export default function Main() {
  const initialState = {};
  const history = createHistory();
  const store = configureStore(initialState, history);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
}
