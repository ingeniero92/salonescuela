import React from 'react';
import Modal from 'react-modal';
import { observer } from "mobx-react";

import { useAppStore } from "../../providers/StoreRootProvider";

const MenuComponent = observer(() => {

    const appStore = useAppStore();

    const customStyles = {
        content: {
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + require("../../media/img/fondo.png").default + ")",
          backgroundColor: "rgb(51,51,51)",
          backgroundSize: "1000%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          inset: "0px",
          padding: "0%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
    };

    function afterOpenModal(){
    }

    function closeModal(){
        appStore.toggleModal();
    }

    return (      
        <Modal
            isOpen={appStore.modalIsOpen}
            onAfterOpen={() => afterOpenModal()}
            onRequestClose={() => closeModal()}
            style={customStyles}
            contentLabel="Menu"
            ariaHideApp={false}
            closeTimeoutMS={500}
        >
            <div className="menu">
                <span onClick={() => appStore.toggleModal()}><span className="link">ESCUELA</span></span>
                <span onClick={() => appStore.toggleModal()}><span className="link">PROGRAMA</span></span>
                <span onClick={() => appStore.toggleModal()}><span className="link">CONTACTO</span></span>
            </div>
        </Modal>
    );    

});

export default MenuComponent;