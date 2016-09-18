import React, { PropTypes } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Flex, Box } from "reflexbox";
import FaFacebookOfficial from "react-icons/lib/fa/facebook-official";

import accountStyles from "../styles.css";

const PwdlessLogin = ({ loginWithFacebook, handleSubmit, pristine, submitting }) => (
  <Box col={4}>
    <Flex column>
      <RaisedButton
        primary
        label="Log in with Facebook"
        fullWidth
        onTouchTap={loginWithFacebook}
        icon={<FaFacebookOfficial />}
      />

      <Box py={2} className={accountStyles.separator}>
        <span>or</span>
      </Box>

      <form onSubmit={handleSubmit}>


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
              disabled={pristine || submitting}
            />
          </Box>
        </Flex>
      </form>
    </Flex>
  </Box>
);

PwdlessLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginWithFacebook: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default PwdlessLogin;
