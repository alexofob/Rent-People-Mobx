import React from 'react';
import { storiesOf } from '@kadira/storybook';

import App from './index';

/// Prepare stores
const routerStore = {
  currentView: {
    name: "home",
  }
};

let viewStore = {
  isSnackbarOpened: false,
  snackbarMessage: ' ',
};

storiesOf('Core.App', module)
  .add('default view', () => {
    viewStore = {
      isSnackbarOpened: false,
      snackbarMessage: ' ',
    };
    return (
      <App
        viewStore={viewStore}
        routerStore={routerStore}
      />
    )
  })
  .add('Snackbar Opened View', () => {
    viewStore = {
      isSnackbarOpened: true,
      snackbarMessage: 'Test Successful',
    };
    return (
      <App
        viewStore={viewStore}
        routerStore={routerStore}
      />
    )
  });