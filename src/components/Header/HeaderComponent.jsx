import React from 'react';
import { observer } from "mobx-react";

import { withStore } from "../../providers/StoreRootProvider";
import BaseComponent from '../Base/BaseComponent';

class Header extends BaseComponent {

    render(){
        return(
            <header>
                <span>SALØNESCUELA</span>
                <i className="fa fa-bars"></i>
            </header>
        );
    }

}

export default withStore(observer(Header));