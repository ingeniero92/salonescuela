import React from 'react';
import { observer } from "mobx-react";

import MenuLinksComponent from './MenuLinksComponent';

const MenuLeftComponent = observer(() => {

    return(
        <div className="navbar">
            <MenuLinksComponent />
        </div>
    );
    
});

export default MenuLeftComponent;