import React from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { PublicRoute, PrivateRoute } from 'commons/Route';
import Authenticated from 'components/Authenticated';
import Authentication from 'components/Authentication';
import Navbar from 'commons/NavBar';
import SidebarRouter from 'commons/SideBarRouter';
import { isLogin } from 'utils';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getSidebarItems from 'components/Authenticated/sideBarItems'

const showNav = authPage => {
  if (!authPage && isLogin()) {
    return <Navbar />;
  }
  return <></>;
};

const showSidebar = authPage => {
  if (!authPage && isLogin()) {
    return <SidebarRouter sideBarItems={getSidebarItems()} />
  }
  return <></>;
};

const App = ({ location }) => {
  const isAuthenticationPage = location.pathname.split('/').includes('auth');
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {showNav(isAuthenticationPage)}
        {showSidebar(isAuthenticationPage)}
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <PublicRoute path="/auth" component={Authentication} />
          <PrivateRoute path="/" component={Authenticated} />
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
    </>
  );
};

export default withRouter(App);
