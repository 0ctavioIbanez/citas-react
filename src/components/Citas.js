import React, {Fragment} from 'react';

const Citas = ({cita, eliminarCita}) => {

    return (
        <Fragment>
            <div className="cita animated fadeIn fast">
                <h4>Mascota: {cita.mascota}</h4>
                <p>Dueño: {cita.dueno}</p>
                <p>Fecha: {cita.fecha}</p>
                <p>Síntomas: {cita.sintomas}</p>
                <button
                className="button eliminar u-full-width"
                    onClick={ () => {eliminarCita(cita.id) }}
                >Eliminar cita</button>
            </div>
        </Fragment>
    );
};

export default Citas;