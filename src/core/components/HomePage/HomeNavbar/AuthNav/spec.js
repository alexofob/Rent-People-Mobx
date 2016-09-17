import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AuthNav from './index';


storiesOf('Core.HomePage.HomeNavbar.AuthNav', module)
  .add('default view', () => (
    <AuthNav
      firstName="Alex"
      onLogout={action('click the Logout button')}
    />
  ));