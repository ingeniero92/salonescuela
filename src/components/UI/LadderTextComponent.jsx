import React, { useState } from 'react';
import { observer } from "mobx-react";

const LadderTextComponent = observer((props) => {

    const textExpanded = "Leer menos";
    const textNoExpanded = "Leer más";

    const [secondText, setSecondText] = useState(false);
    const [secondTextLink, setSecondTextLink] = useState(textNoExpanded);

    const [thirdText, setThirdText] = useState(false);
    const [thirdTextLink, setThirdTextLink] = useState(textNoExpanded);

    function changeText(text){
        if(text === 2){
            if(secondText){
                setSecondText(false);
                setSecondTextLink(textNoExpanded);
            } else {
                setSecondText(true);
                setSecondTextLink(textExpanded);
            }
        } else if(text === 3){
            if(thirdText){
                setThirdText(false);
                setThirdTextLink(textNoExpanded);
            } else {
                setThirdText(true);
                setThirdTextLink(textExpanded);
            }
        } 
    }

    return(
        <div className="ladderText">

            {props.firstText !== undefined &&
                <div className="first-text">
                    <span>{props.firstText}</span>
                    {props.secondText !== undefined &&
                        <span className="link" onClick={ () => changeText(2)}>{secondTextLink}</span>
                    }
                </div>
            }

            {secondText && props.secondText !== undefined &&
                <div className="second-text">
                    <span>{props.secondText}</span>
                    {props.thirdText !== undefined && 
                        <span className="link" onClick={ () => changeText(3)}>{thirdTextLink}</span>
                    }
                </div>
            }

            {secondText && thirdText && props.thirdText !== undefined && 
                <div className="third-text">
                    <span>{props.thirdText}</span>
                </div>
            }

        </div>
    );
    
});

export default LadderTextComponent;