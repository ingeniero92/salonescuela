import React, { useState } from 'react';

const TeacherDetailsComponent = (props) => {

    const name              = props.teacher.name;
    const title             = props.teacher.title;
    const description       = props.teacher.description;
    const subdescription    = props.teacher.subdescription;
    const url               = props.teacher.url;
    const img               = props.teacher.img;

    const textExpanded = "Leer menos";
    const textNoExpanded = "Leer más";

    const [secondText, setSecondText] = useState(false);
    const [secondTextLink, setSecondTextLink] = useState(textNoExpanded);

    function changeText(){
        if(secondText){
            setSecondText(false);
            setSecondTextLink(textNoExpanded);
        } else {
            setSecondText(true);
            setSecondTextLink(textExpanded);
        }
    }

    return(
        <div className="teacherDetails">

            <div className="nameTitle">
                <span className="teacherName">{name}.</span>
                <span className="teacherTitle">{title}.</span>
            </div>

            {description !== undefined &&
                <div className="description">
                    <span>{description}</span>
                    {subdescription !== undefined &&
                        <span className="link" onClick={ () => changeText()}>{secondTextLink}</span>
                    }
                </div>
            }

            {img !== undefined &&
                <div className="img">
                    <img src={"/img/teachers/" + img} alt={name} />
                </div>
            }

            {secondText && subdescription !== undefined &&
                <div className="subdescription">
                    <span>{subdescription}</span>
                </div>
            }

            <span className="url">{url}</span>

        </div>
    );
    
};

export default TeacherDetailsComponent;