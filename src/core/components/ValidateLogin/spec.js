/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ValidateLoginForm from './index';


/*const loginForm = {
  fields: {
    email: {
      name: 'email',
      label: 'Email Address',
    },
  },
  isValid: true,
};*/

/*loginForm.loginWithFacebook = action('Login with Facebook');
loginForm.loginWithGoogle = action('Login with Google');
loginForm.loginPwdless = action('Login Passwordless'); */

storiesOf('Core.ValidateLogin', module)
  .add('Default view', () => (
    <ValidateLoginForm />
  ))
  ;
