import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {

  const [listadoCitas, setListadoCitas] = useState([]);

  const handleCitas = citas => {
    setListadoCitas([
      ...listadoCitas,
      citas
    ]);
  }

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
            />
          ))}
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
