import React from 'react';

const SocialNetworksComponent = (props) => {

    return(
        <div className="socialNetworks-container">
            {props.instagram !== undefined &&
                <a target="blank" href={"https://www.instagram.com/" + props.instagram}><i className="fab fa-instagram-square"></i></a>
            }
            {props.facebook !== undefined &&
                <a target="blank" href={"https://www.facebook.com/" + props.facebook}><i className="fab fa-facebook-square"></i></a>
            }
            {props.twitter !== undefined &&
                <a target="blank" href={"https://twitter.com/" + props.twitter }><i className="fab fa-twitter-square"></i></a>
            }     
            {props.linkedin !== undefined &&
                <a target="blank" href={"https://linkedin.com/" + props.linkedin }><i className="fab fa-linkedin"></i></a>
            }     
        </div>
    );
    
};

export default SocialNetworksComponent;