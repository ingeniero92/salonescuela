import React from 'react';
import { observer } from "mobx-react";

import { useAppStore } from '../../providers/StoreRootProvider';
import SocialNetworksComponent from '../UI/SocialNetworksComponent';

const ContactComponent = observer(() => {

    const appStore = useAppStore();

    const twitter   = appStore.twitterURL;
    const facebook  = appStore.facebookURL;
    const instagram = appStore.instagramURL;
    const linkedin  = appStore.linkedinURL;
    const email     = appStore.email;

    return(
        <section className="section contact" id="contact">
            <span className="title">Contacto</span>
            <span className="text"> 
                Solicita información sobre nuestros cursos, o envíanos cualquier comentario referente a nuestro curso.
            </span>
            <span className="text"> 
                Puedes escribirnos a cualquier hora del día (<a className="link" href={"mailto:" + email}>{email}</a>) pero también puedes escribirnos un texto vía Whatsapp: <i className="fab fa-whatsapp"></i> +34 615 972 686
            </span>
            <span className="text"> 
                Nuestra escuela se encuentra en el centro de Madrid, en el barrio de la Latina:<br></br>Calle Arganzuela Nº9<br></br>Local Derecho<br></br>28005, Madrid
            </span>       
            <div className="socialNetworks">
                <SocialNetworksComponent twitter={twitter} facebook={facebook} instagram={instagram} linkedin={linkedin}/>
            </div>
        </section>
    );
    
});

export default ContactComponent;