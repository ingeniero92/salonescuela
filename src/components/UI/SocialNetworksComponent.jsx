import React from "react";

const SocialNetworksComponent = (props) => {

    return(
        <div className="socialNetworks-container">
            {props.instagram !== undefined && props.instagram !== "" &&
                <a target="blank" href={props.instagram}><i className="fab fa-instagram"></i></a>
            }
            {props.facebook !== undefined && props.facebook !== "" &&
                <a target="blank" href={props.facebook}><i className="fa fa-facebook-f"></i></a>
            }
            {props.twitter !== undefined && props.twitter !== "" &&
                <a target="blank" href={props.twitter }><i className="fab fa-twitter-square"></i></a>
            }     
            {props.linkedin !== undefined && props.linkedin !== "" &&
                <a target="blank" href={props.linkedin }><i className="fab fa-linkedin-in"></i></a>
            }     
        </div>
    );
    
};

export default SocialNetworksComponent;