import { observable , computed, action } from 'mobx';

class UserStore {
  // fetch = null;

  @observable currentUser = null;

 /* constructor(fetch) {
    this.fetch = fetch;
  } */

  @computed get isAuthenticated() {
    return this.currentUser !== null;
  }

  @computed get user() {
    if (this.currentUser.firstName !== null) {
      return this.currentUser.firstName;
    }
    else if (this.currentUser.email !== null) {
      return this.currentUser.email;
    }
    else return "Anonymous";
    }


  @action performLogin(username, password, callback) {
      this.fetch(`/json/${username}-${password}.json`)
          .then(user => {
              this.currentUser = user
              callback(true)
          })
          .catch(err => {
              callback(false)
          })
  }

}

const userStore = new UserStore();

export default userStore;

export { UserStore };
