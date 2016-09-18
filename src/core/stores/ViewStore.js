import { observable, action } from "mobx";

class ViewStore {

  @observable isSnackbarOpened = false;
  @observable snackbarMessage = " ";
  @observable isLeftNavOpened = false;

  @action closeSnackbar = () => (this.isSnackbarOpened = false);

  @action openSnackbar = () => (this.isSnackbarOpened = true);

  @action setSnackbarMessage = message => (this.snackbarMessage = message);

  @action openLeftNav = () => (this.isLeftNavOpened = true);

  @action closeLeftNav = () => (this.isLeftNavOpened = false);

}

const viewStore = new ViewStore();

export default viewStore;

export { ViewStore };
