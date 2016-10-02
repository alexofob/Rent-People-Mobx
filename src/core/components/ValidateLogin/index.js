/* eslint no-unused-prop-types: 'off'*/
import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';
import { observer } from 'mobx-react';
import validateLoginForm from '../../stores/ValidateLoginForm';
import { ViewStore } from '../../stores/ViewStore';


const ValidateLogin = ({ viewStore }) => {
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
          <Box py={2}>
            <RaisedButton
              type="submit"
              secondary
              fullWidth
              label="Log in"
              disabled={!validateLoginForm.isValid}
            />
          </Box>
          <Box>
            <a href="#" onClick={viewStore.showLoginDialog}>
              <small> Did not get the code?</small>
            </a>
          </Box>
        </form>
      </Flex>
    </Box>
  );
};

ValidateLogin.propTypes = {
  viewStore: PropTypes.instanceOf(ViewStore),
};

// Applies mayBeStubbed for React Storybook

export default observer(['viewStore'], ValidateLogin);
