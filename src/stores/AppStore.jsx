import { makeAutoObservable} from "mobx";

export class AppStore {

    rootStore;
    modalIsOpen = 0;

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    toggleModal(){
        this.modalIsOpen = !this.modalIsOpen;
    }

    closeModal(){
        this.modalIsOpen = false;
    }

}