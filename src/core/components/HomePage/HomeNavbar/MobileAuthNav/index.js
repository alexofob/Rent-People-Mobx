import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import AuthMenu from '../AuthMenu';
import MdPerson from 'react-icons/lib/md/person';

const MobileAuthNav = observer(({ firstName, handleLogout }) => (
  <Menu>
    <MenuItem
      primaryText={firstName}
      leftIcon={<MdPerson />}
    />
    <Divider />
    <AuthMenu
      logout={handleLogout}
    />
  </Menu>
));

MobileAuthNav.propTypes = {
  firstName: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default MobileAuthNav;
