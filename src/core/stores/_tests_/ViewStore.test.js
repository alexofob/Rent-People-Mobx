// Below declaration is for jest functions which are available globally
/* global describe it expect */

import { ViewStore } from "../ViewStore";

describe("ViewStore", () => {
  it("closes snackbar", () => {
    const store = new ViewStore();
    store.closeSnackbar();
    expect(store.isSnackbarOpened).toBe(false);
  });
  it("notifies user of an event", () => {
    const store = new ViewStore();
    store.notifyUser('message');
    expect(store.isSnackbarOpened).toBe(true);
    expect(store.snackbarMessage).toBe('message');
  });
  it("opens side bar navigation", () => {
    const store = new ViewStore();
    store.openLeftNav();
    expect(store.isLeftNavOpened).toBe(true);
  });
  it("closes side bar navigation", () => {
    const store = new ViewStore();
    store.closeLeftNav();
    expect(store.isLeftNavOpened).toBe(false);
  });
  it("opens login dialog", () => {
    const store = new ViewStore();
    store.openDialog();
    expect(store.isDialogOpened).toBe(true);
  });
  it("closes login dialog", () => {
    const store = new ViewStore();
    store.closeDialog();
    expect(store.isDialogOpened).toBe(false);
  });
  it("shows login dialog", () => {
    const store = new ViewStore();
    store.showLoginDialog();
    expect(store.dialogContent).toBe('login');
  });
  it("shows validate login dialog", () => {
    const store = new ViewStore();
    store.showValidateLoginDialog();
    expect(store.dialogContent).toBe('validateLogin');
});
});
