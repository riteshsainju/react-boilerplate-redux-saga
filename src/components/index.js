import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
}
