/* global window */
import Form from 'mobx-react-form';
import validatorjs from 'validatorjs';
import Auth0 from 'auth0-js';
import { viewStore } from './';

const auth0 = new Auth0({
  clientID: 'TXWykyAVhmmTmkdnkFiDktvRkVFkIIx2',
  domain: 'rentpeople.auth0.com',
  responseType: 'token',
  callbackURL: window.location.href,
});

class LoginForm extends Form {

  onSuccess(form) {
    // get field values
    const email = form.values();
    console.log('Form Values!', email);

    // redirects the call to auth0 instance
    auth0.requestEmailCode(email, (err) => {
      if (err) {
        viewStore.notifyUser('Unable to send mail!, please try again.');
        return;
      }
      viewStore.notifyUser('Validation Code has been sent to your email address.' +
      ' Please use the code to login.');
      viewStore.showValidateLoginDialog();

    });
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('Login validation failed');
    viewStore.notifyUser('Login validation failed');
  }
}

export default
  new LoginForm({
    plugins: {
      dvr: validatorjs,
    },
    fields: {
      email: {
        label: 'Email',
        rules: 'required|email|string|between:5,30',
      },
    },
  });
