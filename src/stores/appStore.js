import { observable } from "mobx";

export default class AppStore {
    rootStore;

    @observable mainPageTitle = "Hostman Test"

    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}
