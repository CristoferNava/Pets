import React from 'react';

const Appo = ({appo, removeAppo}) => (
  <div className="cita">
    <p>Mascota: <span>{appo.pet}</span></p>
    <p>Dueño: <span>{appo.owner}</span></p>
    <p>Fecha: <span>{appo.date}</span></p>
    <p>Hora: <span>{appo.time}</span></p>
    <p>Síntomas: <span>{appo.symptoms}</span></p>

    <button
      className="button eliminar u-full-width"
      onClick={() => removeAppo(appo.id)}
    >Eliminar Cita</button>
  </div>
);

export default Appo;