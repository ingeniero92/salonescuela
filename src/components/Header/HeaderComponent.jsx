import React from 'react';
import { observer } from "mobx-react";

import { withStore } from "../../providers/StoreRootProvider";
import BaseComponent from '../Base/BaseComponent';

class Header extends BaseComponent {

    render(){
        return(
            <header>
                <div className="content">
                    <span>SALØNESCUELA</span>
                    <i onClick={ () => this.store.appStore.toggleModal()} className="fa fa-bars"></i>
                </div>
            </header>
        );
    }

}

export default withStore(observer(Header));