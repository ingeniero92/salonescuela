import React from 'react';
import { observer } from "mobx-react";
import * as Scroll from 'react-scroll';

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
                        <span onClick={this.scrollToTop}>{this.store.appStore.headerTitle}</span>
                        <i onClick={ () => this.store.appStore.toggleModal()} className="fa fa-bars"></i>
                    </div>
                </header>
            </React.Fragment>
        );
    }

}

export default withStore(observer(Header));