import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import MobileAuthNav from './index';

storiesOf('Core.HomePage.HomeNavbar.MobileAuth', module)
  .add('default view', () => (
    <MobileAuthNav
      firstName="Alex"
      handleLogout={action('click the Logout button')}
    />
  ));