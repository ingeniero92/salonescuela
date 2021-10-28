import { makeAutoObservable} from "mobx";

export class AppStore {

    rootStore;
    modalIsOpen = false;

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    toggleModal(){
        this.modalIsOpen = !this.modalIsOpen;
    }

    closeModal(){
        document.body.style.overflow = 'unset';
        this.modalIsOpen = false;
    }

}