import React, { Fragment, useState } from 'react';
const { v4: uuid } = require('uuid');

const Form = ({createAppo}) => {
  const [appo, setAppo] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: '',
  });

  const [errors, setErrrors] = useState(false);

  const handleChange = e => {
    setAppo({
      ...appo,
      [e.target.name]: e.target.value
    });
  };

  // To reset the form
  const {pet, owner, date, time, symptoms} = appo;

  const submitAppo = e => {
    e.preventDefault();

    // Validate
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || 
        symptoms.trim() === '') {
          setErrrors(true);
          return;
    }

    // Pass the validate so we remove the error message
    setErrrors(false);

    // Assign an ID
    appo.id = uuid();

    // Create the appo
    createAppo(appo);

    // Reset the form
    setAppo({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: '',
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {errors 
        ? <p className="alerta-error">Todos los campos son obligatorios</p>
        : null
      }
      <form
        onSubmit={submitAppo}
      >
        <label>Nombre Mascota: </label>
        <input 
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={handleChange}
          value={pet}
        />

        <label>Nombre del Dueño: </label>
        <input 
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={handleChange}
          value={owner}
        />

        <label>Fecha: </label>
        <input 
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Hora: </label>
        <input 
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms: </label>
        <textarea 
          name="symptoms"
          className="u-full-width"
          onChange={handleChange} 
          value={symptoms}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Agendar Cita</button>
      </form>
    </Fragment>
  )
};

export default Form;