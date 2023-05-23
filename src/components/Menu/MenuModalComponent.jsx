import React from 'react';
import Modal from 'react-modal';
import { observer } from "mobx-react";
import { Link } from 'react-scroll';

import { useAppStore } from "../../store/RootStoreProvider";

const MenuModalComponent = observer(() => {

    const appStore = useAppStore();

    function afterOpenModal(){
        document.body.style.overflow = 'hidden';
    }

    function closeModal(){
        appStore.closeModal();
    }

    return (      
        <Modal
            isOpen={appStore.modalIsOpen}
            onAfterOpen={() => afterOpenModal()}
            onRequestClose={() => closeModal()}
            className="menu-modal"
            contentLabel="Menu"
            ariaHideApp={false}
            closeTimeoutMS={500}
        >
            <div className="menu">
                <i onClick={ () => closeModal()} className="fas fa-times"></i>
                <Link to="school"      spy={true} smooth={true} offset={0}    duration={500} onClick={() => closeModal()}><span className="link">ESCUELA</span></Link>
                <Link to="program"     spy={true} smooth={true} offset={-100} duration={500} onClick={() => closeModal()}><span className="link">PROGRAMA</span></Link>
                <Link to="teachers"    spy={true} smooth={true} offset={-100} duration={500} onClick={() => closeModal()}><span className="link">TUTORES</span></Link>
                <Link to="admission"   spy={true} smooth={true} offset={-100} duration={500} onClick={() => closeModal()}><span className="link">ADMISIÓN</span></Link>
                <Link to="news"        spy={true} smooth={true} offset={-100} duration={500} onClick={() => closeModal()}><span className="link">NOTICIAS</span></Link>
                <Link to="contact"     spy={true} smooth={true} offset={-100} duration={500} onClick={() => closeModal()}><span className="link">CONTACTO</span></Link>
                <Link to="scholarship" spy={true} smooth={true} offset={-100} duration={500} onClick={() => closeModal()}><span className="link">BECA</span></Link>
            </div>
        </Modal>
    );    

});

export default MenuModalComponent;