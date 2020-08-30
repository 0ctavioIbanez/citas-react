import React, {Fragment, useState} from 'react';

const Formulario = ({handleCitas}) => {

     //Campos formulario
     const [citas, setCitas] = useState({
        mascota: '',
        dueno: '',
        fecha: '',
        sintomas: ''
    });

    let {mascota, dueno, fecha, sintomas} = citas;

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

        //Asignar id
        citas.id = (Math.random() * 100).toFixed();

        // Agregar cita a local storage
        handleCitas(citas);

        //Reiniciar formulario
        setCitas({
            mascota: '',
            dueno: '',
            fecha: '',
            sintomas: ''
        });
    }

    function mostrarError(){
        setError(true);
        setTimeout( () => {
            setError(false);
        }, 2500);
    }

    

    return ( 
        <Fragment>
            <h2>Agrega una cita</h2>
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
                    value={mascota}
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="dueno"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={updateCitas}
                    value={dueno}
                />

                <label>Fecha de la cita</label>
                <input 
                    type="text"
                    name="fecha"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={updateCitas}
                    value={fecha}
                />

                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={updateCitas}
                    value={sintomas}
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