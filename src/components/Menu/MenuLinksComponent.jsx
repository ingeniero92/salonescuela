import React from 'react';
import { Link } from 'react-scroll';

const MenuLinksComponent = () => {

    return (      
        <React.Fragment>
            <Link to="school"      spy={true} smooth={true} offset={-200} ignoreCancelEvents={true}><span className="link">ESCUELA</span></Link>
            <Link to="program"     spy={true} smooth={true} offset={-200} ignoreCancelEvents={true}><span className="link">PROGRAMA</span></Link>
            <Link to="teachers"    spy={true} smooth={true} offset={-200} ignoreCancelEvents={true}><span className="link">PROFESORES</span></Link>
            <Link to="admission"   spy={true} smooth={true} offset={-200} ignoreCancelEvents={true}><span className="link">ADMISIÓN</span></Link>
            <Link to="news"        spy={true} smooth={true} offset={-200} ignoreCancelEvents={true}><span className="link">NOTICIAS</span></Link>
            <Link to="contact"     spy={true} smooth={true} offset={-200} ignoreCancelEvents={true}><span className="link">CONTACTO</span></Link>
            <Link to="scholarship" spy={true} smooth={true} offset={-200} ignoreCancelEvents={true}><span className="link">BECA</span></Link>
        </React.Fragment>
    );    

};

export default MenuLinksComponent;