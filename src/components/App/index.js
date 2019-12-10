import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import store, { history } from 'store';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { PublicRoute, PrivateRoute } from 'commons/Route';
import Home from 'components/Authenticated/Home';
import Dashboard from 'components/Authenticated/Dashboard';
import Registration from 'components/Authenticated/Modules/Registration';
import AddPatient from 'components/Authenticated/Modules/Registration/Form';

import Authentication from 'components/Authentication';
import Navbar from 'commons/NavBar';
import { isLogin } from 'utils';

const showNav = authPage => {
  if (!authPage && isLogin()) {
    return <Navbar />;
  }
  return <></>;
};

const App = ({ location }) => {
  const isAuthenticationPage = location.pathname.split('/').includes('auth');

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {showNav(isAuthenticationPage)}
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <PublicRoute path="/auth" component={Authentication} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/registration/add-patient" component={AddPatient} />
            <PrivateRoute path="/registration" component={Registration} />
            <PrivateRoute path="/home" component={Home} />
          </Switch>
        </MuiPickersUtilsProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default withRouter(App);
