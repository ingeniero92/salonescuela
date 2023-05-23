import React from 'react';
import { Link } from 'react-scroll';

//import { useAppStore } from "../../providers/RootStoreProvider";

const MenuLinksComponent = (props) => {

    //const appStore = useAppStore();

    let offset = -200;

    if(props.offset !== undefined){
        offset = props.offset;
    }

    let handleSetActive = (e) =>{
        //appStore.setActiveSection(e);
    }

    let handleSetInactive = (e) =>{
        //appStore.setLastActiveSection(e);
    }

    return (      
        <React.Fragment>
            <Link to="school"      spy={true} smooth={true} offset={offset}    ignoreCancelEvents={true} onSetActive={handleSetActive} onSetInactive={handleSetInactive} ><span className="link">ESCUELA</span></Link>
            <Link to="program"     spy={true} smooth={true} offset={offset}    ignoreCancelEvents={true} onSetActive={handleSetActive} onSetInactive={handleSetInactive} ><span className="link">PROGRAMA</span></Link>
            <Link to="teachers"    spy={true} smooth={true} offset={offset}    ignoreCancelEvents={true} onSetActive={handleSetActive} onSetInactive={handleSetInactive} ><span className="link">PROFESORES</span></Link>
            <Link to="admission"   spy={true} smooth={true} offset={offset}    ignoreCancelEvents={true} onSetActive={handleSetActive} onSetInactive={handleSetInactive} ><span className="link">ADMISIÓN</span></Link>
            <Link to="news"        spy={true} smooth={true} offset={offset-10} ignoreCancelEvents={true} onSetActive={handleSetActive} onSetInactive={handleSetInactive} ><span className="link">NOTICIAS</span></Link>
            <Link to="contact"     spy={true} smooth={true} offset={offset}    ignoreCancelEvents={true} onSetActive={handleSetActive} onSetInactive={handleSetInactive} ><span className="link">CONTACTO</span></Link>
            <Link to="scholarship" spy={true} smooth={true} offset={offset}    ignoreCancelEvents={true} onSetActive={handleSetActive} onSetInactive={handleSetInactive} ><span className="link">BECA</span></Link>
        </React.Fragment>
    );    

};

export default MenuLinksComponent;