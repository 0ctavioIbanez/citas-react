import React, {Fragment, useState} from 'react';

const Formulario = ({handleCitas}) => {

     //Campos formulario
     const [citas, setCitas] = useState({
        mascota: '',
        dueno: '',
        fecha: '',
        sintomas: ''
    });

// State citas
    const updateCitas = e => {
        setCitas({
            ...citas,
            [e.target.name] : e.target.value
        });
    }

// State error
    const [error, setError] = useState(false);

    const validaForm = e => {
        e.preventDefault();

    //Validar campos
        let count = 0;
        Object.values(citas).forEach(element => {
            if( element !== ""){
                count++;
            }
        });

        if( count !== 4 ){
            mostrarError();
            return;
        }

        // Agregar cita a local storage
        handleCitas(citas);

    }

    function mostrarError(){
        setError(true);
        setTimeout( () => {
            setError(false);
        }, 2500);
    }

    return ( 
        <Fragment>
            <h2>Desde Formulario</h2>
            <form
                onSubmit={ validaForm }
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={updateCitas}
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="dueno"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={updateCitas}
                />

                <label>Fecha de la cita</label>
                <input 
                    type="text"
                    name="fecha"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={updateCitas}
                />

                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={updateCitas}
                ></textarea>

                <button 
                    type="submit"
                    className="u-full-width button-primary"
                >Enviar</button>
                
                {   error 
                    ?<p>Todos los campos son obligatorios</p>
                    :null
                }
            </form>
        </Fragment>
     );
}
 
export default Formulario;