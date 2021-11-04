import { makeAutoObservable, runInAction } from "mobx";

export class AppStore {

    /* ROOT STORE */
    
    rootStore;

    headerTitle = "SALØNESCUELA";    
    modalIsOpen = false;

    /* JSON IMPORT */

    news = {};
    tutores = {};
    invitados = {};

    /* GENERALS */

    year = "";

    /* CONTACT */
    telephone = "";
    email = "";    

    /* PROGRAM */
    program = "";

    /* ADMISSION */
    admissionStartDate      = "";

    /* SCHOLARSHIP */
    scholarshipStartDate    = "";
    scholarshipEndDate      = "";
    scholarshipPrizeDate    = "";

    /* SOCIAL NETWORKS */
    twitterURL              = "";
    facebookURL             = "";
    instagramURL            = "";
    linkedinURL             = "";
    
    /* INIT */

    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    init(){
        this.fetchSettings();
        this.fetchNews();
        this.fetchTeachers();
    }

    /* FETCH */

    fetchSettings(){
        fetch("/public/json/settings.json")
            .then(res => res.json())
            .then(data => runInAction(() => {    

                /* GENERALS */

                this.year = data.year;

                /* CONTACT */
                this.telephone = data.telephone;
                this.email = data.email;    

                /* PROGRAM */
                this.program = data.program;

                /* ADMISSION */
                this.admissionStartDate      = data.admission.startDate;

                /* SCHOLARSHIP */
                this.scholarshipStartDate    = data.scholarship.startDate;
                this.scholarshipEndDate      = data.scholarship.endDate;
                this.scholarshipPrizeDate    = data.scholarship.prizeDate;

                /* SOCIAL NETWORKS */
                this.twitterURL              = data.socialNetworks.twitterURL;
                this.facebookURL             = data.socialNetworks.facebookURL;
                this.instagramURL            = data.socialNetworks.instagramURL;
                this.linkedinURL             = data.socialNetworks.linkedinURL;

            }) );
    }

    async fetchNews(){
        fetch("/public/json/news.json")
            .then(res => res.json())
            .then(data => runInAction(() => {this.news = data}) );
    }

    async fetchTeachers(){
        fetch("/public/json/teachers.json")
            .then(res => res.json())
            .then(data => runInAction(() => {
                this.tutores = data.tutores;
                this.invitados = data.invitados;
            }) );
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