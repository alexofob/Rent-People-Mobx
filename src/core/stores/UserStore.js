/* eslint no-extra-boolean-cast: "off"*/
import { observable, computed, action, autorun } from 'mobx';
import { loadProfile, saveProfile, removeItem } from './utils/LocalStorage';

class UserStore {
  @observable currentUser;

  constructor() {
    this.currentUser = loadProfile();
    autorun(() => {
      if (this.currentUser == null) {
        removeItem('profile');
      }
      saveProfile(this.currentUser);
    });
  }

  @computed get isAuthenticated() {
    return !!this.currentUser;
  }

  @computed get user() {
    if (this.currentUser == null) {
      return 'Anonymous';
    } else if (!!this.currentUser.given_name) {
      return this.currentUser.given_name;
    } else if (!!this.currentUser.nickname) {
      return this.currentUser.nickname;
    } else if (!!this.currentUser.name) {
      return this.currentUser.name;
    } else if (!!this.currentUser.email) {
      return this.currentUser.email;
    } return 'Unknown';
  }

  @action updateCurrentUser = user => (this.currentUser = user);

}

const userStore = new UserStore();

export default userStore;

export { UserStore };
