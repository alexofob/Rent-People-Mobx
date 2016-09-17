import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AuthMenu from './index';


storiesOf('Core.HomePage.HomeNavbar.AuthMenu', module)
  .add('default view', () => (
    <AuthMenu
      logout={action('click the Logout button')}

    />
  ));