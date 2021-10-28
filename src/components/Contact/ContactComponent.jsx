import React from 'react';
import { observer } from "mobx-react";

import LadderTextComponent from '../UI/LadderTextComponent';
import GoogleMapsComponent from '../UI/GoogleMapsComponent';
import SocialNetworksComponent from '../UI/SocialNetworksComponent';

const ContactComponent = observer(() => {

    const twitter   = ""; // TODO
    const facebook  = ""; // TODO
    const instagram = ""; // TODO
    const linkedin  = ""; // TODO

    return(
        <section className="section contact" name="contact">
            <span className="title">CONTACTO</span>
            <div className="socialNetworks">
                <SocialNetworksComponent twitter={twitter} facebook={facebook} instagram={instagram} linkedin={linkedin}/>
            </div>
            <LadderTextComponent 
                firstText  = {"Solicita información sobre nuestros cursos, o envíanos cualquier comentario referente a nuestro curso."}
            />
            <LadderTextComponent 
                firstText  = {"Puedes escribirnos a cualquier hora del día (se@salonescuela.com) pero también puedes escribirnos un texto vía Whatsapp: +34 615 972 686"}
            />
            <LadderTextComponent 
                firstText  = {"Nuestra escuela se encuentra en el centro de Madrid, en el barrio de la Latina:\nCalle Arganzuela Nº9\nLocal Derecho\n28005, Madrid\n"}
            />     
            <div className="map">
                <GoogleMapsComponent />
            </div>     
            <div className="socialNetworks">
                <SocialNetworksComponent twitter={twitter} facebook={facebook} instagram={instagram} linkedin={linkedin}/>
            </div>
        </section>
    );
    
});

export default ContactComponent;