import React from 'react';
import { observer } from "mobx-react";
import LadderTextComponent from '../UI/LadderTextComponent';
import { useAppStore } from '../../providers/StoreRootProvider';

const ScholarshipComponent = observer(() => {

    const appStore = useAppStore();

    const startDate  = appStore.scholarshipStartDate;
    const endDate    = appStore.scholarshipEndDate;
    const prizeDate  = appStore.scholarshipPrizeDate;
    const email      = appStore.email;

    return(
        <section className="section scholarship" name="scholarship">
            <span className="title">Beca</span>            
            <span className="text"> 
                La beca salønescuela seleccionará entre todos los proyectos presentados uno de ellos para que su autor/a tenga cubiertos el 100% de los gastos de matrícula.
            </span>
            <LadderTextComponent 
                firstText={"Texto informativo de la beca."}
                secondText={"Está abierta a cualquier persona mayor de edad, independientemente de su lugar de procedencia y nacionalidad.<span class='newLine'></span>Cada participante puede presentarse con un único proyecto.<span class='newLine'></span>Los participantes asumen y aceptan las bases de la convocatoria. Cualquier duda sobre su interpretación será resuelta por salønescuela de forma inapelable aplicando estas bases de buena fe. El incumplimiento de cualquiera de las bases supone la exclusión inmediata de la convocatoria."}
            />
            <LadderTextComponent 
                firstText={"¿Cómo participar?"}
                secondText={"Cada participante debe crear un archivo comprimido en formato .zip o .rar que no supere los 15 Mb, nombrado por su nombre y apellidos. El archivo se enviará a través de email como se detalla a continuación."}
            />
            <span className="text"> 
                Cada participante debe enviar a través del email <a className="link" href={"mailto:" + email}>{email}</a>:
            </span>
            <ul>
                <li>Nombre y apellidos</li>
                <li>Correo electrónico</li>
                <li>CV en formato .pdf</li>
                <li>Teléfono</li>
                <li>Ciudad de residencia</li>
                <li>DNI en formato .jpg</li>
                <li>Portfolio de obra en formato .pdf que contedrá un máximo de 10 fotografías y un texto descriptivo de su obra.</li>
                <li>Dossier del artista.</li>
                <li>Carta de motivación (máximo 300 palabras)</li>
            </ul>
            <span className="text"> 
                La convocatoria de la beca está abierta desde el día {startDate} hasta el {endDate}.
            </span>
            <span className="text"> 
                El jurado está formado por el claustro de salønescuela y dará a conocer su fallo de forma pública e inapelable a través de la web y redes sociales antes del {prizeDate}.
            </span>
        </section>
    );
    
});

export default ScholarshipComponent;