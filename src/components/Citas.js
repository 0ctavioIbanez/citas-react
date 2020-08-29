import React, {Fragment} from 'react';

const Citas = cita => {
    return (
        <Fragment>
            <div>
                <h4>Mascota: {cita.cita.mascota}</h4>
                <p>Dueño: {cita.cita.dueno}</p>
                <p>Fecha: {cita.cita.fecha}</p>
                <p>Síntomas: {cita.cita.sintomas}</p>
                <button>Eliminar cita</button>
            </div>
        </Fragment>
    );
};

export default Citas;