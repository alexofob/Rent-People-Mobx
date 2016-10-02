/* eslint no-unused-prop-types: 'off'*/
import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Flex, Box } from 'reflexbox';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaGoogle from 'react-icons/lib/fa/google';
import { observer, inject } from 'mobx-react';
import loginForm from '../../stores/LoginForm';
import { AuthService } from '../../stores/utils/Auth0';


import accountStyles from '../styles.css';

const styles = {
  buttons: {
    height: 50,
  },
};

const PwdlessLogin = ({ auth0 }) => {
  const { name, value, label, sync, error } = loginForm.$('email');
  return (
    <Box col={12}>
      <Flex column >
        <Box py={2}>
          <RaisedButton
            primary
            label="Log in with Facebook"
            fullWidth
            onTouchTap={auth0.facebookLogin}
            icon={<FaFacebookOfficial />}
            style={styles.buttons}
          />
        </Box>
        <RaisedButton
          secondary
          label="Log in with Google"
          fullWidth
          onTouchTap={auth0.googleLogin}
          icon={<FaGoogle />}
          style={styles.buttons}
        />
        <Box py={2} className={accountStyles.separator}>
          <span>or</span>
        </Box>
        <form onSubmit={loginForm.handleOnSubmit} >
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
                label="Request Log in Code"
                disabled={!loginForm.isValid}
              />
            </Box>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

PwdlessLogin.propTypes = {
  auth0: PropTypes.instanceOf(AuthService),
};

// Applies mayBeStubbed for React Storybook
export default inject('auth0')(observer(PwdlessLogin));
