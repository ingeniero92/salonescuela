import React from 'react';
import { observer } from "mobx-react";

import SchoolComponent from '../School/SchoolComponent';
import ProgramComponent from '../Program/ProgramComponent';
import TeachersComponent from '../Teachers/TeachersComponent';
import AdmissionComponent from '../Admission/AdmissionComponent';
import ContactComponent from '../Contact/ContactComponent';
import ScholarshipComponent from '../Scholarship/ScholarshipComponent';

const MainComponent = observer(() => {

    return(
        <div className="main-content">
            <SchoolComponent />
            <ProgramComponent />
            <TeachersComponent />
            <AdmissionComponent />
            <ContactComponent />
            <ScholarshipComponent />
        </div>
    );
    
});

export default MainComponent;