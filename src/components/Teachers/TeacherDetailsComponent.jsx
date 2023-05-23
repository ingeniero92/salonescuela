import React from "react";

import LadderTextComponent from "../UI/LadderTextComponent";

const TeacherDetailsComponent = (props) => {

    const name              = props.teacher.name;
    const title             = props.teacher.title;
    const description       = props.teacher.description;
    const subdescription    = props.teacher.subdescription;
    const url               = props.teacher.url;
    const link              = props.teacher.link;
    const img               = props.teacher.img;

    return(
        <div className="teacherDetails">

            <div className="nameTitle">
                <span className="teacherName">{name}</span>
                <span className="teacherTitle">{title}</span>
            </div>

            <LadderTextComponent 
                firstText={description} 
                secondText={subdescription} 
                images={img !== undefined ? [{src:"/public/img/teachers/" + img, alt: name}] : undefined}
                url={url !== undefined && url.trim() !== "" ? url : undefined}
                link={link !== undefined && link.trim() !== "" ? link: undefined}
            />          

        </div>
    );
    
};

export default TeacherDetailsComponent;