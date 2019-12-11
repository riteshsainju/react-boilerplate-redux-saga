import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { cookieJar } from 'utils';

const Navbar = ({ history }) => {
  return (
    <AppBar style={{ background: 'white' }}>
      <Toolbar style={{ color: 'grey' }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => {
            history.push('/dashboard');
          }}
        >
          EMR
        </Typography>
        <Button
          color="inherit"
          style={{ float: 'right' }}
          onClick={() => {
            cookieJar.clearAll();
            history.push('/auth/login');
          }}
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
