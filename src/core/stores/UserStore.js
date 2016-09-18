import { observable, computed } from "mobx";

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
    if (this.currentUser == null) {
      return "Anonymous";
    } else if (this.currentUser.firstName !== null) {
      return this.currentUser.firstName;
    } else if (this.currentUser.email !== null) {
      return this.currentUser.email;
    } return "Unknown";
  }

}

const userStore = new UserStore();

export default userStore;

export { UserStore };
