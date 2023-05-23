import React, { useState } from "react";
import { observer } from "mobx-react";

const LadderTextComponent = observer((props) => {

    const textExpanded = "Leer menos";
    const textNoExpanded = "Leer más";

    const [secondText, setSecondText] = useState(false);
    const [secondTextLink, setSecondTextLink] = useState(textNoExpanded);

    const [thirdText, setThirdText] = useState(false);
    const [thirdTextLink, setThirdTextLink] = useState(textNoExpanded);

    let urlName = "";
    if(props.url !== undefined){
        if(props.link !== undefined){
            urlName = props.link;
        } else {
            urlName = props.url;
        }
    }

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
                    <span dangerouslySetInnerHTML={{__html: props.firstText}}></span>
                    {props.secondText !== undefined &&
                        <span className="link" onClick={ () => changeText(2)} >{secondTextLink}</span>
                    }
                </div>
            }

            {props.img !== undefined &&
                <div className="img">
                    <img src={props.img} alt={props.img} />
                </div>
            }           

            {secondText && props.secondText !== undefined &&
                <div className="second-text">
                    {props.images !== undefined && (
                        <div className="images">
                        { props.images.map( (value, key) => (
                            <img key={key} src={value.src} alt={value.alt} />
                        ))}
                        </div>
                    )}
                    <span dangerouslySetInnerHTML={{__html: props.secondText}}></span>
                    {props.thirdText !== undefined && 
                        <span className="link" onClick={ () => changeText(3)} >{thirdTextLink}</span>
                    }                    
                    {props.url !== undefined &&
                        <a href={props.url} className="url">{urlName}</a>
                    }
                </div>
            }

            {secondText && thirdText && props.thirdText !== undefined && 
                <div className="third-text">
                    <span dangerouslySetInnerHTML={{__html: props.thirdText}}></span>
                </div>
            }

        </div>
    );
    
});

export default LadderTextComponent;