import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {

  const eliminarCita = key =>{
    let prueba = listadoCitas.filter( () => {
      return listadoCitas.id !== key;
    });
    console.log(prueba);
  }

  //Verificar datos en local storage
  let ls = JSON.parse(localStorage.getItem('citas'));
  if (!ls) {
    ls = [];
  }

  const [listadoCitas, setListadoCitas] = useState(ls);

  const handleCitas = citas => {
    setListadoCitas([
      ...listadoCitas,
      citas
    ]);
  }
 

  useEffect( () => {
    localStorage.setItem('citas', JSON.stringify(listadoCitas));
  }, [listadoCitas])

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario 
            handleCitas={handleCitas}
          />
        </div>
        <div className="one-half column">
          {listadoCitas.length === 0 
            ? <h2>Crea una cita</h2>
            : <h2>Administra tus citas</h2>
          }
          {listadoCitas.map( cita => (
            <Citas 
              key={Math.random()}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
