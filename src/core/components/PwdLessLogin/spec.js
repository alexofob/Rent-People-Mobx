/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PwdLessLogin from './index';
import loginForm from '../../stores/LoginForm';


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

storiesOf('Core.PwdLessLogin', module)
  .add('Default view', () => (
    <PwdLessLogin loginForm={loginForm} />
  ))
  ;
