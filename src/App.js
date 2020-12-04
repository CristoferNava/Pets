import { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appo from './components/Appo';

function App() {
  // appos in local storage
  let apposInit = JSON.parse(localStorage.getItem('appos'));
  if (!apposInit) {
    apposInit = [];
  }

  // State of the appos
  const [appos, setAppos] = useState(apposInit);

  // useEffect se ejecuta cuando el componente está listo pero también cuando
  // hay cambios en el state
  useEffect(() => {
    if (apposInit) {
      localStorage.setItem('appos', JSON.stringify(appos));
    } else {
      localStorage.setItem('appos', JSON.stringify([]));
    }
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