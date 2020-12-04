import { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appo from './components/Appo';

function App() {
  // State of the appos
  const [appos, setAppos] = useState([]);

  // useEffect se ejecuta cuando el componente está listo pero también cuando
  // hay cambios en el state
  useEffect(() => {
    console.log('Listo');
  }, [appos]); // Everytime the state of appos change useEffect executes

  const createAppo = appo => {
    setAppos([
      ...appos,
      appo
    ]);
  };

  const removeAppo = id => {
    const apposNotRemove = appos.filter(appo => appo.id !== id);
    setAppos(apposNotRemove);
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createAppo={createAppo}
            />
          </div>
          <div className="one-half column">
            {appos.map(appo => (
              <Appo
                key={appo.id}
                appo={appo}
                removeAppo={removeAppo}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;