import React from 'react';
import { observer } from "mobx-react";

import { useAppStore } from "../../providers/StoreRootProvider";

const Button = observer(() => {

    const appStore = useAppStore();

    return(
        <button onClick={() => appStore.increment()}>SUMAR - {appStore.value}</button>
    );
    
});

export default Button;