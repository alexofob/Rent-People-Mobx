/*  global document */
/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { grey200, black } from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { startRouter } from './core/stores/router';
import * as stores from './core/stores';
import App from './core/components/App';
import auth0 from './core/stores/utils/Auth0';

// Observe loading of Roboto (to remove roboto, remove the <link> tag in
// the index.html file and this observer)
import styles from './core/components/styles.css';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const robotoObserver = new FontFaceObserver('Roboto', {});

// When Roboto is loaded, add a font-family using Roboto to the body
robotoObserver.load().then(() => {
  document.body.classList.add(styles.fontLoaded);
}, () => {
  document.body.classList.remove(styles.fontLoaded);
});

useStrict(true);

startRouter(stores.routerStore);

const muiTheme = getMuiTheme({
  appBar: {
    color: grey200,
    textColor: black,
    height: 56,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider {...stores} auth0={auth0} >
      <App />
    </Provider>
  </MuiThemeProvider>,
    document.querySelector('#root')
);
