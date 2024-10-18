import React from 'react';

const Premios = ({ premiosDisponibles, onPremioSeleccionado }) => {
  return (
    <div className="prizes-screen">
      <h2>Elige tu premio</h2>
      {premiosDisponibles.length > 0 ? (
        premiosDisponibles.map((premio, index) => (
          <button key={index} onClick={() => onPremioSeleccionado(premio)}>
            {premio.nombre} - {premio.valor} puntos
          </button>
        ))
      ) : (
        <p>No hay premios disponibles.</p>
      )}
    </div>
  );
};

export default Premios;
