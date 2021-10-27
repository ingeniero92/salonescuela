import React from 'react';
import { observer } from "mobx-react";

import LadderTextComponent from '../UI/LadderTextComponent';

const SchoolComponent = observer(() => {

    return(
        <section className="section school">
            <span className="title">ESCUELA</span>
            <LadderTextComponent 
                firstText  = {"Salønescuela es una propuesta pedagógica de creación e investigación sobre arte contemporáneo para confrontar/posicionar al artista con su obra y consigo mismo."}
                secondText = {"Somos Ángela Cuadra, Enrique Radigales y María Sánchez, artistas y fundadores de Escuela Salón.  Nos acoge el espacio Nadie Nunca Nada No,  y estudio del artista Ramón Mateos.\n\nSalønescuela hereda el nombre y el espíritu de uno de los espacios expositivos imprescindibles en el panorama cultural, donde se han visto las propuestas más libres y transgresoras del circuito artístico: Salón, de Ángela Cuadra y Daisuke Kato. Ambos proyectos comparten esta idea: “Un salón es una reunión de personas bajo el techo de un anfitrión inspirador, que se lleva a cabo en parte para divertirse y en parte para refinar el gusto y aumentar el conocimiento de los participantes a través de la conversación”\n\nNuestro objetivo es trabajar a partir de la experimentación artística, donde el deseo de crear sea el motor de trabajo, una escuela donde artistas aprenden de artistas.\n\nTrabajaremos desde la experiencia, la praxis y la reflexión de cada asistente, de manera que los profesores y sus metodologías evolucionarán de manera porosa y orgánica en relación a las cualidades y necesidades que aparezcan y detectemos en los procesos de trabajo y reflexiones.\n\nLos proyectos, las estrategias artísticas y el análisis estarán vinculados al trabajo en el aula/taller desde el seguimiento y diálogo directo del trabajo. La asistencia y compromiso de los y las participantes son requisitos imprescindibles."}
            />
            <LadderTextComponent 
                firstText  = {"Si estás pensando en saltar a un postgrado o a un master impartido por escuelas europeas nosotros podemos orientarte y prepararte."}
            />
            <LadderTextComponent 
                firstText  = {"Nuestra escuela se encuentra en un amplio taller en el centro de Madrid, con las herramientas e instalaciones necesarias para experimentar."}
                secondText = {"Trabajaremos en el espacio Nadie Nunca Nada No, espacio independiente fundado por Ramón Mateos en 2014 donde organiza talleres, presentaciones, exposiciones, encuentros con artistas y diferentes actividades enmarcadas en el circuito artístico.\n\nEl espacio dispone de tres zonas: taller, sala diáfana de exposiciones-trabajo y una gran biblioteca con numeros libros y publicaciones de referencia. Contaremos con diferentes herramientas y materiales de uso común y dispondremos de un espacio individual de trabajo.\n\nNadie Nunca Nada No es un espacio donde sucederán diferentes actividades en paralelo al curso, enriqueciendo y fortaleciendo cada sesión."}
            />
        </section>
    );
    
});

export default SchoolComponent;