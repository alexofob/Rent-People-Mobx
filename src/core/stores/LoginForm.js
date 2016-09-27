
import Form from 'mobx-react-form';
import validatorjs from 'validatorjs';
import { viewStore } from './';

class LoginForm extends Form {

  onSuccess(form) {
    alert('Form is valid! Send the request here.');
    // get field values
    console.log('Form Values!', form.values());
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors());
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!');
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
