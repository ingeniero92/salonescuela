import React from 'react';
import { observer } from "mobx-react";

import { withStore } from "../../providers/StoreRootProvider";
import BaseComponent from '../Base/BaseComponent';

class Footer extends BaseComponent {     

    render(){
        return(
            <h1>Footer - {this.store.appStore.value}</h1>
        );
    }

}

export default withStore(observer(Footer));