import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../src/core/components/styles.css';
import './styles.css';
import { grey200, black } from 'material-ui/styles/colors';


import { setStubbingMode } from 'react-stubber';
setStubbingMode(true);

const muiTheme = getMuiTheme({
  appBar: {
    color: grey200,
    textColor: black,
    height: 56,
  },
});

addDecorator((story) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    {story()}
  </MuiThemeProvider>
));

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
