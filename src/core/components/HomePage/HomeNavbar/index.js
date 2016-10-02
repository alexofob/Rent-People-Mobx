/**
*
* HomeNavBar
*
*/

import React, { PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import { Flex } from 'reflexbox';
import { ViewStore } from '../../../stores/ViewStore';
import { UserStore } from '../../../stores/UserStore';
import { RouterStore } from '../../../stores/RouterStore';
import { AuthService } from '../../../stores/utils/Auth0';


import HomeNavBarStyles from './styles.css';
import AuthNav from './AuthNav';
import PublicNav from './PublicNav';
import MobilePublicNav from './MobilePublicNav';
import MobileAuthNav from './MobileAuthNav';

import PwdLessLogin from '../../PwdLessLogin';
import ValidateLogin from '../../ValidateLogin';


const styles = {
  brand: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: 'pointer',
  },
  dialogContent: {
    width: '90%',
    maxWidth: 420,
  },
};

const dialogContent = {
  login: { node: <PwdLessLogin />, title: 'Log In' },
  validateLogin: { node: <ValidateLogin />, title: 'Enter your code to log in' },
};

let HomeNavBar = ({ viewStore, userStore, routerStore, auth0 }) => (
  <nav role="navigation">
    <Toolbar styleName="desktop-only">
      <ToolbarGroup >
        <ToolbarTitle
          text="Rent People"
          style={styles.brand}
          onClick={routerStore.showHome}
        />
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        <Flex align="center">
          {userStore.isAuthenticated ?
            <AuthNav
              handleLogout={auth0.logout}
              firstName={userStore.user}
            /> :
            <PublicNav showLoginDialog={viewStore.openDialog} />}
        </Flex>
        <FlatButton label="Services" />
        <RaisedButton label="List your house" secondary />
      </ToolbarGroup>
    </Toolbar>
    <AppBar
      title="Rent People"
      styleName="mobile-only"
      titleStyle={{ ...styles.brand, textAlign: 'center' }}
      onLeftIconButtonTouchTap={viewStore.openLeftNav}
      onTitleTouchTap={routerStore.showHome}
    />
    <Drawer
      docked={false}
      width={250}
      open={viewStore.isLeftNavOpened}
      onRequestChange={viewStore.closeLeftNav}
    >
      {userStore.isAuthenticated ?
        <MobileAuthNav
          handleLogout={auth0.logout}
          firstName={userStore.user}
        /> :
        <MobilePublicNav showLoginDialog={viewStore.openDialog} />}
    </Drawer>
    <Dialog
      title={dialogContent[viewStore.dialogContent].title}
      modal={false}
      open={viewStore.isDialogOpened}
      onRequestClose={viewStore.closeDialog}
      contentStyle={styles.dialogContent}
      autoScrollBodyContent
    >
      {dialogContent[viewStore.dialogContent].node}
    </Dialog>

  </nav>
);

HomeNavBar.propTypes = {
  routerStore: PropTypes.instanceOf(RouterStore),
  viewStore: PropTypes.instanceOf(ViewStore),
  userStore: PropTypes.instanceOf(UserStore),
  auth0: PropTypes.instanceOf(AuthService),
};

HomeNavBar = cssModules(HomeNavBar, HomeNavBarStyles);

export default inject('viewStore', 'userStore', 'routerStore', 'auth0')(observer(HomeNavBar));
