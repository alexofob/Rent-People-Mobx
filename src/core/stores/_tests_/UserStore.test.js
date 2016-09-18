// Below declaration is for jest functions which are available globally
/* global describe it expect */

import { UserStore } from "../UserStore";

describe("UserStore", () => {
  it("checks user who is not authenticated", () => {
    const store = new UserStore();
    expect(store.isAuthenticated).toBe(false);
  });
  it("gets user who is not authenticated", () => {
    const store = new UserStore();
    expect(store.user).toBe("Anonymous");
  });
});
