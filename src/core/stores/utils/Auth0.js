/* global localStorage location */
/* eslint class-methods-use-this: "off"*/
import Auth0 from 'auth0-js';
import { observable, autorun, action } from 'mobx';
import { viewStore, userStore } from '../';
import { saveToken, loadToken, removeItem } from './LocalStorage';


class AuthService {
  emailInput;  // Stores the email input and uses in the passwordless login procedure
  @observable idToken; // idToken to be used for access control to data

  constructor(clientID, domain) {
    // Configure Auth0
    this.auth0 = new Auth0({
      clientID,
      domain,
      responseType: 'token',
    });
    this.idToken = loadToken();
    autorun(() => {
      if (this.idToken == null) {
        removeItem('idToken');
      }
      saveToken(this.idToken);
    });
  }

// Step 1 in the passwordless authentication procedure
  sendMail(emailInput) {
    // redirects the call to auth0 instance
    this.emailInput = emailInput;
    this.auth0.requestEmailCode(emailInput, (err) => {
      if (err) {
        viewStore.notifyUser('Unable to send mail!, please try again.');
        return;
      }
      viewStore.notifyUser('Validation Code has been sent to your email address.' +
      ' Please use the code to login.');
      viewStore.showValidateLoginDialog();
    });
  }

// Step 2 in the passwordless authentication procedure
  login(codeInput) {
    // submit the passcode to complete authentication
    this.auth0.verifyEmailCode({ ...this.emailInput, ...codeInput },
      this.loginCallback);
  }

// Google login. Page is redirected after login id_token is extracted at the router
  googleLogin = () => {
    this.auth0.login({
      connection: 'google-oauth2',
    }, this.socialLoginCallback);
  }

// Facebook login. Page is redirected after login id_token is extracted at the router
  facebookLogin = () => {
    this.auth0.login({
      connection: 'facebook',
    }, this.socialLoginCallback);
  }

// Passwordless Login callback. Page is not redirected. Result of authentication is
// available in the result argument
  @action loginCallback = (err, result) => {
    if (err) {
      viewStore.notifyUser(`Login failed:  ${err.message}`);
    }
    this.idToken = result.idToken;
    this.getAuth0Profile(result.idToken);
  }

  // Callback procedure for handling errors in case social login fails
  socialLoginCallback = (err) => {
    if (err) {
      viewStore.notifyUser(`Login failed:  ${err.message}`);
    }
  }

  // Fetch User profile information with hash extracted from the redirected url
  // Applies to the social logins
  fetchUserProfile(hash) {
    const result = this.auth0.parseHash(hash);
    if (result && result.idToken) {
    // fetch user profile
      this.getAuth0Profile(result.idToken);
    } else if (result && result.error) {
      viewStore.notifyUser(`Login error:  ${result.error}`);
    }
  }

  // Fetch User profile information with login token.
  getAuth0Profile(idToken) {
    this.auth0.getProfile(idToken, (err, profile) => {
      if (err) {
        console.log('Error loading the Profile: ', err);
        viewStore.notifyUser(`Error loading the Profile: ${idToken}`);
      } else {
        userStore.updateCurrentUser(profile);
        viewStore.notifyUser(`Login successful: ${profile.name}`);
      }
    });
  }

  @action logout = () => {
    // Clear user token and profile data from localStorage
    this.idToken = null;
    userStore.updateCurrentUser(null);
  }
}

const auth0 = new AuthService(
  'TXWykyAVhmmTmkdnkFiDktvRkVFkIIx2',
  'rentpeople.auth0.com',
);

export { AuthService };

export default auth0;
