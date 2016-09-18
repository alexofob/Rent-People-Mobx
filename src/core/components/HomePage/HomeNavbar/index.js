/**
*
* HomeNavBar
*
*/

import React, { PropTypes } from "react";
import { observer } from "mobx-react";
import cssModules from "react-css-modules";
import RaisedButton from "material-ui/RaisedButton";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import FlatButton from "material-ui/FlatButton";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import { Flex } from "reflexbox";

import HomeNavBarStyles from "./styles.css";
import AuthNav from "./AuthNav";
import PublicNav from "./PublicNav";
import MobilePublicNav from "./MobilePublicNav";
import MobileAuthNav from "./MobileAuthNav";


const styles = {
  brand: {
    textDecoration: "none",
    color: "black",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 2,
    cursor: "pointer",
  },
  dialogContent: {
    width: "90%",
    maxWidth: 320,
    display: "flex",
    flexDirection: "column",
  },
};


const HomeNavBar = observer(({ viewStore, userStore, routerStore }) => (
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
              onLogout={userStore.handleLogout}
              firstName={userStore.user}
            /> :
            <PublicNav showLoginDialog={viewStore.showLoginDialog} />}
        </Flex>
        <FlatButton label="Services" />
        <RaisedButton label="List your house" secondary />
      </ToolbarGroup>
    </Toolbar>
    <AppBar
      title="Rent People"
      styleName="mobile-only"
      titleStyle={{ ...styles.brand, textAlign: "center" }}
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
          handleLogout={userStore.handleLogout}
          firstName={userStore.user}
        /> :
        <MobilePublicNav showLoginDialog={viewStore.showLoginDialog} />}
    </Drawer>

  </nav>
));

HomeNavBar.propTypes = {
  routerStore: PropTypes.shape({
    showHome: React.PropTypes.func.isRequired,
  }),
  viewStore: PropTypes.shape({
    showLoginDialog: React.PropTypes.func,
    openLeftNav: React.PropTypes.bool.isRequired,
    closeLeftNav: React.PropTypes.func,
  }),
  userStore: PropTypes.shape({
    isAuthenticated: React.PropTypes.bool.isRequired,
    handleLogout: React.PropTypes.func.isRequired,
    user: React.PropTypes.string.isRequired,
  }),
};

export default cssModules(HomeNavBar, HomeNavBarStyles);
