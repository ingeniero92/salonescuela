import React from 'react';
import { observer } from "mobx-react";
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

import { withStore } from "../../providers/StoreRootProvider";
import BaseComponent from '../Base/BaseComponent';

var scroll = Scroll.animateScroll;

class Header extends BaseComponent {

    scrollToTop(){
        scroll.scrollToTop();
    }    

    render(){
        return(
            <React.Fragment>
                <header>
                    <div className="content">
                        <div className="links">
                            <Link to="school"      spy={true} smooth={true} offset={-200} onClick={() => this.store.appStore.closeModal()} ><span className="link">ESCUELA</span></Link>
                            <Link to="program"     spy={true} smooth={true} offset={-200} onClick={() => this.store.appStore.closeModal()} ><span className="link">PROGRAMA</span></Link>
                            <Link to="teachers"    spy={true} smooth={true} offset={-200} onClick={() => this.store.appStore.closeModal()} ><span className="link">TUTORES</span></Link>
                            <Link to="admission"   spy={true} smooth={true} offset={-200} onClick={() => this.store.appStore.closeModal()} ><span className="link">ADMISIÓN</span></Link>
                            <Link to="news"        spy={true} smooth={true} offset={-200} onClick={() => this.store.appStore.closeModal()} ><span className="link">NOTICIAS</span></Link>
                            <Link to="contact"     spy={true} smooth={true} offset={-200} onClick={() => this.store.appStore.closeModal()} ><span className="link">CONTACTO</span></Link>
                            <Link to="scholarship" spy={true} smooth={true} offset={-200} onClick={() => this.store.appStore.closeModal()} ><span className="link">BECA</span></Link>
                        </div>
                        <i onClick={ () => this.store.appStore.toggleModal()} className={this.store.appStore.modalIsOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>                    
                </header>
            </React.Fragment>
        );
    }

}

export default withStore(observer(Header));