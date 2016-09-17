import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import PublicNav from './index';


storiesOf('Core.HomePage.HomeNavbar.PublicNav', module)
  .add('default view', () => (
    <PublicNav
      showLoginDialog={linkTo('Core.Account.Login', 'default view')}
    />
  ));