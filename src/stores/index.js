import AppStore from "./appStore";

export default class RootStore {
    app;

    constructor() {
        this.app = new AppStore(this);
    }
}
