import React from 'react';
import { observer } from "mobx-react";

import { useWindowDimensions } from "../../providers/HooksProvider";
import MenuLinksComponent from './MenuLinksComponent';

const MenuLeftComponent = observer(() => {

    const { width } = useWindowDimensions();

    let baseOffset = -123;
    let offset = 0;
    if(width < 1024){
        offset = 0;
    } else if(width < 1280){ 
        offset = -4;
    } else if(width < 1400){ 
        offset = -12;
    } else if(width < 1600){ 
        offset = -15;
    } else if(width < 1768){ 
        offset = -22;
    } else if(width < 1920){ 
        offset = -30;
    } else {
        offset = -33;
    }

    return(
        <div className="navbar">
            <MenuLinksComponent offset={baseOffset + offset} />
        </div>
    );
    
});

export default MenuLeftComponent;