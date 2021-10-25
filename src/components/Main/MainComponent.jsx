import React from 'react';
import { observer } from "mobx-react";

import Button from '../UI/ButtonComponent';

const MainComponent = observer(() => {

    return(
        <div>
            <Button />
        </div>
    );
    
});

export default MainComponent;