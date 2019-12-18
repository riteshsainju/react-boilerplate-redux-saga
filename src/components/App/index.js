import React from 'react';

// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { withRouter, Switch, Redirect } from 'react-router-dom';

// import store, { history } from 'store';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { PublicRoute, PrivateRoute } from 'commons/Route';
import Home from 'components/Authenticated/Home';
import Dashboard from 'components/Authenticated/Dashboard';
import Registration from 'components/Authenticated/Modules/Registration';
import AddPatient from 'components/Authenticated/Modules/Registration/Form';
import Authentication from 'components/Authentication';
import Admin from 'components/Authenticated/Admin';

import Navbar from 'commons/NavBar';
import { isLogin } from 'utils';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showNav = authPage => {
  if (!authPage && isLogin()) {
    return <Navbar />;
  }
  return <></>;
};

const App = ({ location }) => {
  const isAuthenticationPage = location.pathname.split('/').includes('auth');
  return (
    <>
      {/* <ConnectedRouter history={history}> */}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {showNav(isAuthenticationPage)}
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <PublicRoute path="/auth" component={Authentication} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/registration" component={Registration} />
          <PrivateRoute path="/registration/add-patient" component={AddPatient} />
          <PrivateRoute path="/registration/edit-patient/:id" component={AddPatient} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </MuiPickersUtilsProvider>
      <ToastContainer
        autoClose={5000}
        closeButton={false}
        transition={Slide}
        hideProgressBar
        draggable={false}
        position="top-right"
        toastClassName="toast-inner-container"
        className="toast-container"
      />
      {/* </ConnectedRouter> */}
    </>
  );
};

export default withRouter(App);
