/* eslint no-unused-prop-types: 'off'*/
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';
import { observer } from 'mobx-react';
import validateLoginForm from '../../stores/ValidateLoginForm';

const styles = {
  buttons: {
    height: 50,
  },
};

const ValidateLogin = () => {
  const { name, value, label, sync, error } = validateLoginForm.$('code');
  return (
    <Box col={12}>
      <Flex column >
        <form onSubmit={validateLoginForm.handleOnSubmit} >
          <TextField
            name={name}
            value={value}
            floatingLabelText={label}
            onChange={sync}
            fullWidth
            errorText={error}
          /><br />
          <Flex
            pt={2}
            align="center"
            justify="space-between"
          >
            <Box auto>
              <RaisedButton
                type="submit"
                secondary
                fullWidth
                label="Log in"
                disabled={!validateLoginForm.isValid}
              />
            </Box>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

// Applies mayBeStubbed for React Storybook

export default observer(ValidateLogin);
