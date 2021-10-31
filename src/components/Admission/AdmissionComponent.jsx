import React from 'react';
import { observer } from "mobx-react";

import LadderTextComponent from '../UI/LadderTextComponent';

const AdmissionComponent = observer(() => {

    const startDate = "xxxxxx"; // TODO

    return(
        <section className="section admission" id="admission">
            <span className="title">Admisión</span>
            <span className="text"> 
                El periodo de admisión para el Curso 2022 se iniciará el {startDate}.
            </span>
            <span className="text"> 
                La inscripción solo puedes realizarla a través del email <a className="link" href="mailto:se@salonescuela.com">se@salonescuela.com</a>.<br></br>
                Las y los candidatos deberán incorporar a su solicitud los siguientes datos y documentos adjuntos:
            </span>
            <ul>
                <li>Nombre y apellidos</li>
                <li>Correo electrónico</li>
                <li>CV en formato .pdf</li>
                <li>Teléfono</li>
                <li>Ciudad de residencia</li>
                <li>DNI en formato .jpg</li>
                <li>Portfolio de obra en formato .pdf que contendrá un máximo de 10 fotografías y un texto descriptivo de su obra.</li>
                <li>Carta de motivación (máximo 300 palabras)</li>
            </ul>
            <span className="text"> 
                La disponibilidad de plazas está limitada a un máximo de 12.
            </span>
            <LadderTextComponent 
                firstText  = {"Resolución de las solicitudes"}
                secondText = {"Las solicitudes serán evaluadas por el Claustro de la escuela.\n\nTras una primera valoración de las candidaturas, las y los aspirantes serán convocados para una entrevista (presencial u online).\n\nEl centro comunicará a los y las candidatos/as la respuesta a su solicitud, que podría ser de Admisión, Lista de espera o No admisión. Esta notificación tendrá lugar el " + startDate + ".\n\nLas y los candidatos que queden en la lista de espera deberán confirmar la permanencia en dicha relación para poder asignar las plazas.\n\nCualquier comunicación se realizará a través del correo electrónico indicado en el formulario de admisión.\n\nDe forma excepcional el centro podría ampliar el periodo de admisión en el caso de que quedaran plazas vacantes."}
            />
            <LadderTextComponent 
                firstText  = {"Matrícula y precios."}
                secondText = {"Una vez comunicada la admisión, las y los candidatos seleccionados tendrán una semana para confirmar que aceptan la plaza propuesta y formalizar el abono de la matrícula. El precio del curso es 2.000€ + 400€ de matrícula.\n\nEl importe del curso se puede formalizar con los siguientes plazos y métodos:\n\n- En un único pago y con 5% de descuento.\n- En cuatro cuotas de 500€."}
            />
        </section>
    );
    
});

export default AdmissionComponent;