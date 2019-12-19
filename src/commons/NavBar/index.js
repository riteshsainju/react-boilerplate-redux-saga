import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from 'constants/theme';
import Button from '@material-ui/core/Button';

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { cookieJar } from 'utils';
import { Logo } from './styled'

const Navbar = ({ history }) => {
  return (
    <AppBar>
      <Toolbar style={{ background: `${theme.color.white}` }}>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Logo
          style={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => {
            history.push('/dashboard');
          }} />
        <Button
          color="inherit"
          style={{ float: 'right',color: `${theme.color.text.secondary}` }}
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
