import React from "react";
import { observer } from "mobx-react";

import LadderTextComponent from "../UI/LadderTextComponent";

const SchoolComponent = observer(() => {

    const images = [
        {src:"/public/img/school/school1.jpg", alt:"school1"},
        {src:"/public/img/school/school2.jpg", alt:"school2"},
        {src:"/public/img/school/school3.jpg", alt:"school3"}
    ]

    return(
        <section className="section school" id="school">
            <span className="title">Escuela</span>
            <LadderTextComponent 
                firstText  = {"salønescuela es una propuesta pedagógica de creación e investigación sobre arte contemporáneo para confrontar y/o posicionar al artista con su obra y consigo mismo."}
                secondText = {"Somos Ángela Cuadra, Enrique Radigales y María Sánchez, artistas y fundadores de salønescuela. Nos acoge el espacio Nadie Nunca Nada No, y estudio del artista Ramón Mateos.<span class='newLine'></span>salønescuela hereda el nombre y el espíritu de uno de los espacios expositivos imprescindibles en el panorama cultural, donde se han visto las propuestas más libres y transgresoras del circuito artístico: Salón, de Ángela Cuadra y Daisuke Kato. Ambos proyectos comparten esta idea: “Un salón es una reunión de personas bajo el techo de un anfitrión inspirador, que se lleva a cabo en parte para divertirse y en parte para refinar el gusto y aumentar el conocimiento de los participantes a través de la conversación”<span class='newLine'></span>Nuestro objetivo es trabajar a partir de la experimentación artística, donde el deseo de crear sea el motor de trabajo, una escuela donde artistas aprenden de artistas. Trabajaremos desde la experiencia, la praxis y la reflexión de cada asistente. Las/los profesoras/es y sus metodologías evolucionarán de manera porosa y orgánica en relación a las características y necesidades que aparezcan y detectemos en los procesos de trabajo y reflexiones."}
            />
            <LadderTextComponent 
                firstText  = {"Si estás pensando en saltar a un postgrado o a un master impartido por escuelas europeas podemos orientarte y prepararte."}
            />
            <LadderTextComponent 
                firstText  = {"Nuestra escuela se encuentra en un amplio taller en el centro de Madrid, con las herramientas e instalaciones necesarias para experimentar."}
                secondText = {"Trabajaremos en Nadie Nunca Nada No, espacio independiente fundado por Ramón Mateos en 2014 donde periódicamente organiza talleres, presentaciones, exposiciones, encuentros con artistas y diferentes actividades vinculadas a la creación. Iván Argote, Dominique Gonzalez-Foerster, Teresa Margolles, Mateo Maté, Manuel Segade, Julia Spínola e Isidoro Valcárcel Medina son algunos de los nombres que han pasado por Nadie Nunca Nada No.<span class='newLine'></span>El espacio dispone de tres zonas: taller, sala diáfana de exposiciones/trabajo y una gran biblioteca con numerosos libros y publicaciones de referencia. Contaremos con diferentes herramientas y materiales de uso común y dispondremos de un lugar individual de trabajo.<span class='newLine'></span>En Nadie Nunca Nada No sucederán diferentes actividades en paralelo al curso, enriqueciendo y fortaleciendo cada sesión."}
                images = {images}
            />
        </section>
    );
    
});

export default SchoolComponent;