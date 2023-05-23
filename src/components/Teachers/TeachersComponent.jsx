import React from 'react';
import { observer } from "mobx-react";

import { useAppStore } from "../../store/RootStoreProvider";
import TeacherDetailsComponent from './TeacherDetailsComponent';

const TeachersComponent = observer(() => {

    const appStore = useAppStore(); 

    return(
        <section className="section teachers" id="teachers">
            
            {Object.keys(appStore.tutores).length > 0 &&
                <React.Fragment>
                    <span className="title">Tutores {appStore.year}</span>            
                    {Object.values(appStore.tutores).map( (value, index) => (
                        <TeacherDetailsComponent key={index} teacher={value}/>
                    ))}      
                </React.Fragment>
            }

            {Object.keys(appStore.invitados).length > 0 &&
                <React.Fragment>
                    <span className="title">Profesores invitados {appStore.year}</span>            
                    {Object.values(appStore.invitados).map( (value, index) => (
                        <TeacherDetailsComponent key={index} teacher={value}/>
                    ))}   
                </React.Fragment>
            }

        </section>
    );
    
});

export default TeachersComponent;