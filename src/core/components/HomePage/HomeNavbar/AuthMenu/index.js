import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MdPerson from 'react-icons/lib/md/person';
import MdDashboard from 'react-icons/lib/md/dashboard';
import MdList from 'react-icons/lib/md/list';
import MdStore from 'react-icons/lib/md/store';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

const AuthMenu = ({ logout }) => (
  <Menu>
    <MenuItem
      primaryText="My Dashboard"
      leftIcon={<MdDashboard />}
    />
    <MenuItem
      primaryText="My Listings"
      leftIcon={<MdList />}
    />
    <MenuItem
      primaryText="My Reservations"
      leftIcon={<MdStore />}
    />
    <MenuItem
      primaryText="Edit Profile"
      leftIcon={<MdPerson />}
    />
    <Divider />
    <MenuItem
      primaryText="Log Out"
      leftIcon={<MdArrowBack />}
      onTouchTap={logout}
    />
  </Menu>
);

AuthMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default AuthMenu;
