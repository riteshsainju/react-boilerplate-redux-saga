import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter, Switch, Redirect } from 'react-router-dom';

import Home from 'components/Home';
import { PublicRoute, PrivateRoute } from 'commons/Route';
import Authentication from 'components/Authentication';
import store, { history } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <PublicRoute path="/auth" component={Authentication} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default withRouter(App);
