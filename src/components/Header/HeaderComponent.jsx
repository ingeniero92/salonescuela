import React from 'react';
import { observer } from "mobx-react";
import * as Scroll from 'react-scroll';

import { withStore } from "../../store/RootStoreProvider";
import BaseComponent from '../Base/BaseComponent';
import MenuLinksComponent from '../Menu/MenuLinksComponent';

var scroll = Scroll.animateScroll;

/* EXAMPLE MOBX STORE USING CLASS COMPONENT INSTEAD FUNCTIONAL COMPONENT WITH HOOK */
class Header extends BaseComponent {

    scrollToTop(){
        scroll.scrollToTop();
    }    

    render(){
        return(
            <header>
                <div className={this.store.appStore.modalIsOpen ? "menu open" : "menu closed"}>
                    <MenuLinksComponent />                          
                </div>
                <div className={this.store.appStore.modalIsOpen ? "links open" : "links closed"}>
                    <MenuLinksComponent />
                </div>
                <i onClick={ () => this.store.appStore.toggleModal()} className={this.store.appStore.modalIsOpen ? "fas fa-bars no-visible" : "fas fa-bars visible"}></i>
                <i onClick={ () => this.store.appStore.toggleModal()} className={this.store.appStore.modalIsOpen ? "fas fa-times visible" : "fas fa-times no-visible"}></i>
            </header>
        );
    }

}

export default withStore(observer(Header));