import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import Home from 'components/Home';
import { PublicRoute, PrivateRoute } from 'commons/Route';
import Authentication from 'components/Authentication';
import store, { history } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <PublicRoute path="/auth" component={Authentication} />
            <PrivateRoute path="/home" component={Home} />
          </Switch>
        </MuiPickersUtilsProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default withRouter(App);
