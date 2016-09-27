/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import HomeNavbar from './index';


// Prepare stores
const routerStore = { };
const userStore = {
  isAuthenticated: false,
};
const viewStore = {
  isLeftNavOpened: false,
};

viewStore.openLeftNav = action('open side bar with Navigation');
userStore.handleLogout = action('log out user');
viewStore.showLoginDialog = action('show login dialog');
viewStore.closeLeftNav = action('close side bar with Navigation');
routerStore.showHome = action('show home page');
viewStore.isDialogOpened = false;


storiesOf('Core.HomePage.HomeNavbar', module)
  .add('Public view', () => {
    userStore.isAuthenticated = false;
    viewStore.isLeftNavOpened = false;
    return (
      <HomeNavbar
        viewStore={viewStore}
        userStore={userStore}
        routerStore={routerStore}
      />
   );
  })
 .add('Logged in view', () => {
   userStore.isAuthenticated = true;
   viewStore.isLeftNavOpened = false;
   userStore.user = 'Alex';
   return (
     <HomeNavbar
       viewStore={viewStore}
       userStore={userStore}
       routerStore={routerStore}
     />
   );
 })
 .add('Public view with sidebar', () => {
   userStore.isAuthenticated = false;
   viewStore.isLeftNavOpened = true;
   return (
     <HomeNavbar
       viewStore={viewStore}
       userStore={userStore}
       routerStore={routerStore}
     />
   );
 })
  .add('Logged in view with sidebar', () => {
    userStore.isAuthenticated = true;
    viewStore.isLeftNavOpened = true;
    userStore.user = 'Alex';
    return (
      <HomeNavbar
        viewStore={viewStore}
        userStore={userStore}
        routerStore={routerStore}
      />
   );
  });
