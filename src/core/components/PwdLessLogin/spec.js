import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PwdLessLogin from '../../containers/Account/PwdLessLogin';


storiesOf('Account.PwdLessLogin', module)
  .add('default view', () => (
    <PwdLessLogin
      onFacebookLogin={action('click the Facebook button')}
      handleSubmit={action('click the Submit button')}
      submitting={false}
    />
  ))
  .add('submitting view', () => (
    <PwdLessLogin
      onFacebookLogin={action('click the Facebook button')}
      handleSubmit={action('click the Submit button')}
      submitting
    />
  ))
  .add('error view', () => (
    <PwdLessLogin
      onFacebookLogin={action('click the Facebook button')}
      handleSubmit={action('click the Submit button')}
      submitting={false}
    />
  ))
;
