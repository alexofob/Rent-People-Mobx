import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { HomePage } from './index';

/// Prepare stores
const routerStore = {

};
const userStore = {
  isAuthenticated: false
};
const viewStore = {
  isLeftNavOpened: false
};

viewStore.openLeftNav = action('open side bar with Navigation');
userStore.handleLogout = action('log out user');
viewStore.showLoginDialog = action('show login dialog');
viewStore.closeLeftNav = action('close side bar with Navigation');
routerStore.showHome = action('show home page');

storiesOf('Core.HomePage', module)
  .add('default view', () => (
    <HomePage
      viewStore={viewStore}
      userStore={userStore}
      routerStore={routerStore}
    />
  ));
