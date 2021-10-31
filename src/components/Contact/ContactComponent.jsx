import React from 'react';
import { observer } from "mobx-react";

import SocialNetworksComponent from '../UI/SocialNetworksComponent';

const ContactComponent = observer(() => {

    const twitter   = ""; // TODO
    const facebook  = ""; // TODO
    const instagram = ""; // TODO
    const linkedin  = ""; // TODO

    return(
        <section className="section contact" id="contact">
            <span className="title">Contacto</span>
            <div className="socialNetworks">
                <SocialNetworksComponent twitter={twitter} facebook={facebook} instagram={instagram} linkedin={linkedin}/>
            </div>
            <span className="text"> 
                Solicita información sobre nuestros cursos, o envíanos cualquier comentario referente a nuestro curso.
            </span>
            <span className="text"> 
                Puedes escribirnos a cualquier hora del día (<a href="mailto:se@salonescuela.com">se@salonescuela.com</a>) pero también puedes escribirnos un texto vía Whatsapp: <i className="fab fa-whatsapp"></i> +34 615 972 686
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