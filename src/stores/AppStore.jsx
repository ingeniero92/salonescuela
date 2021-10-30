import { makeAutoObservable, runInAction } from "mobx";

export class AppStore {

    rootStore;
    modalIsOpen = false;
    news = {};
    teachers = {};
    headerTitle = "SALØNESCUELA";
    
    /* INIT */

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    init(){
        this.fetchNews();
        this.fetchTeachers();
    }

    /* FETCH */

    fetchNews(){
        fetch("json/news.json")
            .then(res => res.json())
            .then(data => runInAction(() => {this.news = data}) );
    }

    fetchTeachers(){
        fetch("json/teachers.json")
            .then(res => res.json())
            .then(data => runInAction(() => {this.teachers = data}) );
    }

    /* MODAL */

    toggleModal(){
        this.modalIsOpen = !this.modalIsOpen;
    }

    closeModal(){
        document.body.style.overflow = 'unset';
        this.modalIsOpen = false;
    }      

    /* HEADER TITLE */
    setHeaderTitle(title){
        this.headerTitle = title;
    }

}