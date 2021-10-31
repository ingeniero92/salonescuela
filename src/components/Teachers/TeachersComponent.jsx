import React from 'react';
import { observer } from "mobx-react";

import { useAppStore } from "../../providers/StoreRootProvider";
import TeacherDetailsComponent from './TeacherDetailsComponent';

const TeachersComponent = observer(() => {

    const appStore = useAppStore(); 

    return(
        <section className="section teachers" id="teachers">
            <span className="title">Tutores 2022</span>            
                {Object.values(appStore.teachers).map( (value, index) => (
                    <TeacherDetailsComponent key={index} teacher={value}/>
                ))}            
        </section>
    );
    
});

export default TeachersComponent;