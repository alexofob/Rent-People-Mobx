import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import MobilePublicNav from './index';


storiesOf('Core.HomePage.HomeNavbar.MobilePublicNav', module)
  .add('default view', () => (
    <MobilePublicNav
      showLoginDialog={linkTo('Account.Login', 'default view')}
    />
  ));