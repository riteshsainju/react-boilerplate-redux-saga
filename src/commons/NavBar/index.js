import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { cookieJar } from 'utils';
import theme from 'constants/theme';
import avatar from 'assets/images/doctor.png'

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from 'commons/DropDown'
import { Logo ,
  Menu,
  ProfileDropdown,
  Avatar,
  SearchBar,
} from './styled'


const Navbar = ({ history }) => {
  return (
    <AppBar>
      <Toolbar style={{ background: `${theme.color.white}` }}>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Logo
          style={{ width: '185px', cursor: 'pointer' }}
          onClick={() => {
            history.push('/dashboard');
          }} />
        <SearchBar >
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchBar>
        <Menu right>
          <Dropdown
            target={() => (
              <ProfileDropdown>
                <Avatar src={avatar} alt="profile" />
              </ProfileDropdown>
            )}
            isSearchable={false}
            options={[
              {
                id   : 1,
                label: 'Settings',
              },

              {
                id     : 3,
                label  : 'Logout',
                onClick: () => {
                  cookieJar.clearAll();
                  history.push('/auth/login');
                }
              },
            ]}
          />
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
