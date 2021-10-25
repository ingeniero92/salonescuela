import { makeAutoObservable} from "mobx";

export class AppStore {

    rootStore;
    value = 0;

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    increment(){
        this.value++;
    }

}