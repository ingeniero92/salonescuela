import React from 'react';
import { observer } from "mobx-react";

import SchoolComponent from '../School/SchoolComponent';
import ProgramComponent from '../Program/ProgramComponent';
import TeachersComponent from '../Teachers/TeachersComponent';
import AdmissionComponent from '../Admission/AdmissionComponent';
import NewsComponent from '../News/NewsComponent';
import ContactComponent from '../Contact/ContactComponent';
import ScholarshipComponent from '../Scholarship/ScholarshipComponent';
import MenuLeftComponent from '../Menu/MenuLeftComponent';

const MainComponent = observer(() => {

    return(
        <div className="main-content">
            <MenuLeftComponent />
            <div className="sections">
                <SchoolComponent />
                <ProgramComponent />
                <TeachersComponent />
                <AdmissionComponent />
                <NewsComponent />
                <ContactComponent />
                <ScholarshipComponent />
            </div>
        </div>
    );
    
});

export default MainComponent;