import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdInfo from 'react-icons/lib/md/info';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import MdSearch from 'react-icons/lib/md/search';

const MobilePubNav = ({ showLoginDialog }) => (
  <div>

    <MenuItem
      primaryText="Log in"
      leftIcon={<MdArrowForward />}
      onClick={showLoginDialog}
    />
    <MenuItem
      primaryText="Services"
      leftIcon={<MdInfo />}
    />
    <MenuItem
      primaryText="List your house"
      leftIcon={<MdAddCircle />}
    />
    <MenuItem
      primaryText="Find a house to rent"
      leftIcon={<MdSearch />}
    />

  </div>
);

MobilePubNav.propTypes = {
  showLoginDialog: PropTypes.func.isRequired,
};

export default MobilePubNav;