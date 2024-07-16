import React from 'react';

function Presentacion(props) {
  return (
    <div>
      <p>Alumno: {props.nombre}</p>;
      <p>{props.proyecto}</p>;
    </div>
  );
}

export default Presentacion;