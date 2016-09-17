import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const PublicNav = ({ showLoginDialog }) =>
  <FlatButton label={"Log In"} onClick={showLoginDialog} />;

PublicNav.propTypes = {
  showLoginDialog: PropTypes.func.isRequired,
};

export default PublicNav;