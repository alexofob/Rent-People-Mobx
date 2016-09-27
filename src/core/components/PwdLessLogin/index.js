/* eslint no-unused-prop-types: 'off'*/
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaGoogle from 'react-icons/lib/fa/google';
import { observer } from 'mobx-react';
import loginForm from '../../stores/LoginForm';

import accountStyles from '../styles.css';

const styles = {
  buttons: {
    height: 50,
  },
};

const PwdlessLogin = () => {
  // const { name, value, label, sync, error } = loginForm.$('email');
  return (
    <Box col={12}>
      <Flex column >
        <Box py={2}>
          <RaisedButton
            primary
            label="Log in with Facebook"
            fullWidth
            onTouchTap={loginForm.handleOnSubmit}
            icon={<FaFacebookOfficial />}
            style={styles.buttons}
          />
        </Box>
        <RaisedButton
          secondary
          label="Log in with Google"
          fullWidth
          onTouchTap={loginForm.handleOnSubmit}
          icon={<FaGoogle />}
          style={styles.buttons}
        />
        <Box py={2} className={accountStyles.separator}>
          <span>or</span>
        </Box>
        <form onSubmit={loginForm.handleOnSubmit} >
          <TextField
            name={loginForm.fields.email.name}
            value={loginForm.$('email').value}
            floatingLabelText={loginForm.$('email').label}
            onChange={loginForm.$('email').sync}
            fullWidth
            errorText={loginForm.$('email').error}
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
                label="LOG IN"
                disabled={!loginForm.isValid}
              />
            </Box>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

// Applies mayBeStubbed for React Storybook

export default observer(PwdlessLogin);
