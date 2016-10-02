/* eslint class-methods-use-this: "off"*/
/* global window */
import Form from 'mobx-react-form';
import validatorjs from 'validatorjs';
import { viewStore } from './';
import auth0 from './utils/Auth0';


class ValidateLoginForm extends Form {

  onSuccess(form) {
    // get field values
    const code = form.values();
    console.log('Form Values!', code);

    // login user with the code received from email
    auth0.login(code);

    // close the login window
    viewStore.closeDialog();
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
  new ValidateLoginForm({
    plugins: {
      dvr: validatorjs,
    },
    fields: {
      code: {
        label: 'Your code',
        rules: 'required|string|between:5,10',
      },
    },
  });
