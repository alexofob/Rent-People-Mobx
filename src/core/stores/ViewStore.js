import { observable, action } from "mobx";

class ViewStore {

  @observable isSnackbarOpened = false;
  @observable snackbarMessage = ' ';
  @observable isLeftNavOpened = false;
  @observable isDialogOpened = false;
  @observable dialogContent = 'login';

  @action closeSnackbar = () => (this.isSnackbarOpened = false);

  @action notifyUser = (message) => {
    this.snackbarMessage = message;
    this.isSnackbarOpened = true;
  }

  @action openLeftNav = () => (this.isLeftNavOpened = true);

  @action closeLeftNav = () => (this.isLeftNavOpened = false);

  @action openDialog = () => (this.isDialogOpened = true);

  @action closeDialog = () => (this.isDialogOpened = false);

  @action showLoginDialog = () => (this.dialogContent = 'login');

  @action showValidateLoginDialog = () => (this.dialogContent = 'validateLogin')

}

const viewStore = new ViewStore();

export default viewStore;

export { ViewStore };
