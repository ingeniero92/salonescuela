import React from 'react';
import { observer } from "mobx-react";

import TeacherDetailsComponent from './TeacherDetailsComponent';

import teachers from '../../media/json/teachers.json'

const TeachersComponent = observer(() => {

    return(
        <section className="section teachers" name="teachers">
            <span className="title">Tutores 2022</span>            
                {Object.values(teachers).map( (value, index) => (
                    <TeacherDetailsComponent key={index} teacher={value}/>
                ))}            
        </section>
    );
    
});

export default TeachersComponent;