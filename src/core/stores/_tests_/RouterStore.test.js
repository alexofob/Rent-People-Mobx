// Below declaration is for jest functions which are available globally
/* global describe it expect */

import { RouterStore } from "../RouterStore";

describe("RouterStore", () => {
  it("shows home page", () => {
    const store = new RouterStore();
    store.showHome();
    expect(store.currentPath).toBe("/");
  });
});
