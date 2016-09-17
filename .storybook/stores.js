import { RouterStore } from '../src/stores/RouterStore';
import { UserStore } from '../src/stores/UserStore';
import { ViewStore } from '../src/stores/ViewStore';

const routerStore = new RouterStore;
const userStore = new UserStore;
const viewStore = new ViewStore;

export {
  routerStore,
  userStore,
  viewStore,
}