import React from 'react';
import { observer } from "mobx-react";

import { useAppStore } from "../../providers/StoreRootProvider";
import MenuLinksComponent from './MenuLinksComponent';

const MenuLeftComponent = observer(() => {

    const appStore = useAppStore();

    return(
        <div className="navbar">
            <MenuLinksComponent />
        </div>
    );
    
});

export default MenuLeftComponent;