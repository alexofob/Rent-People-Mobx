import { Router } from "director";
import { autorun } from "mobx";
import React from "react";

import HomePage from "../components/HomePage";

export function startRouter(store) {
  // update state on url change
  new Router({
    "/": () => store.showHome(),
  }).configure({
    notfound: () => store.showHome(),
    html5history: true,
  }).init();

  // update url on state changes
  /* global window */
  autorun(() => {
    const path = store.currentPath;
    if (path !== window.location.pathname) {
      window.history.pushState(null, null, path);
    }
  });
}

export function renderCurrentView(currentView) {
  const view = currentView;
  switch (view.name) {
  case "home":
    return <HomePage />;
  default:
    return <HomePage />;
  }
}
