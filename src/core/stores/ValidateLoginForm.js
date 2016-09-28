/* global window */
import Form from 'mobx-react-form';
import validatorjs from 'validatorjs';
import { viewStore } from './';


class ValidateLoginForm extends Form {

  onSuccess(form) {
    // get field values
    const email = form.values();
    console.log('Form Values!', email);

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
