import { observable, computed, action } from 'mobx';

class RouterStore {

    @observable currentView = null;

    @computed get currentPath() {
        switch(this.currentView.name) {
            case "home": return "/"
            default: return "/"
        }
    }

    @action showHome = () => {
        this.currentView = {
            name: "home",
        }
    }

}

const routerStore = new RouterStore();

export default routerStore;

export { RouterStore };
