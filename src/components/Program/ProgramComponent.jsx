import React from 'react';
import { observer } from "mobx-react";

import { useAppStore } from '../../providers/StoreRootProvider';
import LadderTextComponent from '../UI/LadderTextComponent';
import DownloadLinkComponent from '../UI/DownloadLinkComponent';

const ProgramComponent = observer(() => {

    const appStore = useAppStore();

    const program = appStore.program;
    const downloadText = "Descarga " + program;
    const downloadURL = "/public/pdf/" + program;

    return(
        <section className="section program" id="program">
            <span className="title">Programa Laboratorio de experimentación y producción artística</span>
            <LadderTextComponent 
                firstText  = {"El Laboratorio de experimentación y producción artística es una propuesta pedagógica para artistas que quieran expandir su proceso de creación, investigación y formalización de su trabajo."}
            />
            <LadderTextComponent 
                firstText  = {"Nos situaremos en procesos de trabajo incómodos, revolviendo interiores, movilizando los proyectos a situaciones fuera de la zona de control, con la búsqueda constante entre diferentes disciplinas para activar el pensamiento, la reflexión y la capacidad de análisis propia (desarrollaremos una técnica/metodología de trabajo que nos permita conseguir herramientas para estructurar los proyectos)."}
                secondText = {"Las estrategias artísticas y el análisis estarán vinculados al trabajo en el aula/taller desde el seguimiento y diálogo directo del trabajo. La asistencia y compromiso de las y los participantes son requisitos imprescindibles. Este curso está dirigido principalmente a artistas que estén desarrollando su trabajo artístico, graduados en BBAA y alumnas/os de postgrado.<span class='newLine'></span>El final de los estudios de las enseñanzas oficiales en el ámbito artístico (grados, ciclos, etc) proporciona conocimientos alejados de la práctica artística real. Comienza a partir de aquí -para aquellas/os que quieran desarrollar su trayectoria como artista- un camino de incertidumbre, alejado de los procesos y prácticas contemporáneas.<span class='newLine'></span>Este es el punto de inicio del Laboratorio de experimentación y producción artística. Las becas, concursos, convocatorias, etc... se convierten en hitos económicos y profesionales que permiten crecer y evolucionar en el circuito del arte, pero que se sitúan en una perspectiva lejana para las/os recién graduadas/os. Obtener uno de estos apoyos requiere de artistas que desarrollen proyectos con un alto grado de experimentación y formalización."}
            />
            <DownloadLinkComponent 
                text = {downloadText}
                url  = {downloadURL}
            />
        </section>
    );
    
});

export default ProgramComponent;