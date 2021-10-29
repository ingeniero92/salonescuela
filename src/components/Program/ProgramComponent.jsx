import React from 'react';
import { observer } from "mobx-react";

import LadderTextComponent from '../UI/LadderTextComponent';
import DownloadLinkComponent from '../UI/DownloadLinkComponent';

const ProgramComponent = observer(() => {

    const downloadText = "Descarga Programa_2020.pdf"; // TODO
    const downloadURL = "/pdf/Programa_2020.pdf"; // TODO

    return(
        <section className="section program" name="program">
            <span className="title">Programa Laboratorio de experimentación y producción artística</span>
            <DownloadLinkComponent 
                text = {downloadText}
                url  = {downloadURL}
            />
            <LadderTextComponent 
                firstText  = {"El Laboratorio de de experimentación y producción artística es una propuesta pedagógica para artistas que quieran expandir su proceso de creación, investigación y formalización de su trabajo."}
                secondText = {"Trabajaremos con metodologías de investigación y creación radicales, con procesos de trabajo no convencionales (incómodos), revolviendo interiores, movilizando los proyectos a situaciones fuera de la zona de control,y con la búsqueda constante entre diferentes disciplinas para activar el pensamiento, la reflexión y la capacidad de análisis propia (desarrollar una técnica/metodología de trabajo que  permita al alumno/a tener sus propias herramientas para estructurar sus proyectos)"}
            />
            <LadderTextComponent 
                firstText  = {"Nuestro programa está dirigido principalmente a artistas que estén desarrollando proyectos artísticos, graduados en BBAA y alumnos/as de postgrado."}
                secondText = {"El final de los estudios de las enseñanzas oficiales en el ámbito artístico (grados, ciclos, etc) proporciona conocimientos alejados de la práctica artística real.  Comienza a partir de aquí -para aquellos y aquellas que quieran desarrollar su trayectoria como artista- un camino de incertidumbre desde un lugar alejado de los procesos y prácticas contemporáneas.\n\nLas becas, concursos, convocatorias, etc... se convierten en hitos económicos y profesionales que permiten crecer y evolucionar en el circuito del arte,  pero que se sitúan en una perspectiva lejana para los/las recién graduados/as. Obtener uno de estos apoyos requiere de artistas que desarrollen proyectos con un alto grado de experimentación y formalización."}
            />
            <DownloadLinkComponent 
                text = {downloadText}
                url  = {downloadURL}
            />
        </section>
    );
    
});

export default ProgramComponent;