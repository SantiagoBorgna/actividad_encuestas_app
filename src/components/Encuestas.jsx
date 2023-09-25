import React from 'react';

function Encuestas({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                <div>
                    <li key={encuesta.id}>{encuesta.pregunta}</li>
                    <ul>
                        <li key={encuesta.opciones}>{encuesta.opciones[0]}</li>
                        <li key={encuesta.opciones}>{encuesta.opciones[1]}</li>
                        <li key={encuesta.opciones}>{encuesta.opciones[2]}</li>
                    </ul>
                </div>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;
    